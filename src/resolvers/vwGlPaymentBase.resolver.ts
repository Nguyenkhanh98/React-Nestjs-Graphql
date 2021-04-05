import {
    Resolver,
    Query,
    Args,

} from '@nestjs/graphql';
import { VwGlPaymentBaseRequest, VwGlPaymentBase } from '../generator/graphql.schema';
import { Logger, Request } from '@nestjs/common';
import { vwGlPaymentService } from 'src/services/vwGlPayment/vwGlPayment.service';

@Resolver( 'VwGlPaymentBase' )
export class VwGlPaymentBaseService {
    constructor( private readonly vwGlPaymentService: vwGlPaymentService ) { }


    @Query( () => [VwGlPaymentBase] )
    async vwGlPayment_base(
        @Args( 'query' ) vwGlPaymentQuery: VwGlPaymentBaseRequest,
    ): Promise<[VwGlPaymentBase]> {
        try {
            const result = await this.vwGlPaymentService.findAll( vwGlPaymentQuery );
            return result;

        } catch ( error ) {
            return error;
        }
    }

}