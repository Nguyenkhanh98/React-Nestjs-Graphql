import { Injectable, Logger } from '@nestjs/common';
import { VwGlPaymentBase } from './interfaces/vwGlPayment.interface';
import { VIETJET_REPORTING_VWGLPAYMENT_ENDPOINT } from '../../config/environments';
import { HttpService } from '@nestjs/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Injectable()
export class vwGlPaymentService {
    constructor( private httpService: HttpService ) { }
    private readonly vwGlPayment: VwGlPaymentBase = null;

    async findAll( params?: any ): Promise<[VwGlPaymentBase]> {
        // const pageNumber = params.pageNumber || 1;
        // const pageLimit = params.pageLimit || 30;
        // const startDate = params.startDate || null;
        // const endDate = params.endDate || null;
        try {
            const response = await this.httpService.axiosRef( {
                method: 'GET',
                url: VIETJET_REPORTING_VWGLPAYMENT_ENDPOINT,
                params
            } );
            return response.data.result;
        } catch ( error ) {
            Logger.error( error )
            return null;
        }
    }

}