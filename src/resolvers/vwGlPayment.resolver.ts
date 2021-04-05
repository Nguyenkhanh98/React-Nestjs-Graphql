import {
    Resolver,
    Query,
    Args,
    Mutation,

} from '@nestjs/graphql';
import { VwGlPaymentRequest, UpdateVwGlPayment } from '../generator/graphql.schema';
import { VwGlPayment } from '../database/entities';
import { VwGlPaymentBase } from '../services/vwGlPayment/interfaces/vwGlPayment.interface';
import { vwGlPaymentService } from '../services/index';
import { getRepository, Like, getConnection } from 'typeorm';
import { Logger } from '@nestjs/common';
@Resolver( 'VwGlPayments' )
export class VwGlPaymentResolver {
    constructor( private readonly vwGlPaymentService: vwGlPaymentService ) { }

    @Query( () => [VwGlPayment] )
    async vwGlPayments(
        @Args( 'query' ) vwGlPaymentQuery: VwGlPaymentRequest,
    ): Promise<VwGlPayment[]> {
        const { pageNumber, pageSize, pnr, strPaymentTakenBy, startDate, endDate } = vwGlPaymentQuery;
        const limit = vwGlPaymentQuery.pageSize || 30;

        const skip = vwGlPaymentQuery.pageNumber ? ( vwGlPaymentQuery.pageNumber - 1 ) * limit : 0;

        const vwGlPaymentPromise: Promise<VwGlPayment[]> = getRepository( VwGlPayment )
            .createQueryBuilder( "vw_gl_payment" )
            .where( `vw_gl_payment.paymentTakenBy = :paymentTakenBy 
            ${pnr ? `AND (vw_gl_payment.reservationNumber = :pnr 
                OR vw_gl_payment.reservationLocator = :pnr)` : ''}
                            
                            `, { paymentTakenBy: strPaymentTakenBy, pnr: pnr } )
            .skip( skip )
            .take( limit )
            .getMany();

        const vwGlPaymentBasePromise = async () => {
            return await this.vwGlPaymentService.findAll( vwGlPaymentQuery );
        }

        try {
            const result = await Promise.all( [vwGlPaymentPromise, vwGlPaymentBasePromise()] )

            const mergeVwGlPayment = result[1].map( eachElement => {
                const vwUpdatedIndex = result[0].findIndex( x => x.glPaymentsReceiptNmbr === eachElement.lngGlPaymentsReceiptNmbr );
                if ( vwUpdatedIndex > -1 ) {
                    const vwUpdated = { ...result[0][vwUpdatedIndex] };
                    result[0].splice( vwUpdatedIndex, 1 );
                    return vwUpdated;
                }
                return new VwGlPayment( {
                    reservationNumber: eachElement.lngReservationNmbr,
                    reservationLocator: eachElement.strResLocator,
                    paymentTakenBy: eachElement.strPaymentTakenBy,
                    glPaymentsAmount: eachElement.mnyGlPaymentsAmount.toString(),
                    glPaymentDate: eachElement.dtmGlPaymentsDate,
                    glPaymentsReceiptNmbr: eachElement.lngGlPaymentsReceiptNmbr,
                    glPaymentMethodIdent: eachElement.strGlPaymentMethodIdent,
                    adjustmentMethod: '',
                    description: '',
                    updatedAt: null,
                } );
            } );
            return mergeVwGlPayment;
        } catch ( error ) {
            Logger.error( error );
            return error;
        }

    }

    @Mutation( () => VwGlPayment )
    async updateVwGlPayment( @Args( 'data' ) data: UpdateVwGlPayment ): Promise<boolean> {
        try {
            const updateData: Partial<VwGlPayment> = new VwGlPayment( { ...data, glPaymentsAmount: data.glPaymentsAmount.toString() } );
            const updateVwGlPaymentRequest = await getConnection()
                .createQueryBuilder()
                .insert()
                .into( VwGlPayment )
                .values( updateData )
                .orUpdate( {
                    conflict_target: ['gl_payments_receipt_nmbr'],
                    overwrite: ['adjustment_method', 'description', 'updated_at']
                } )
                .setParameters( { adjustment_method: data.adjustmentMethod, description: data.description } )
                .execute();
            if ( updateVwGlPaymentRequest ) {
                return true;
            }
            return false;
        } catch ( error ) {
            Logger.error( error );
            return null;
        }
    }

}