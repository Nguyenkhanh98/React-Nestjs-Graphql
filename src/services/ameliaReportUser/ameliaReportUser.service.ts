import { Injectable } from '@nestjs/common';
import { VIETJET_REPORTING_USER_ENDPOINT } from '../../config/environments';
import { HttpService } from '@nestjs/common/http';
import { AmeliaReportUser } from 'src/generator/graphql.schema';

@Injectable()
export class ameliaReportUserService {
    constructor( private httpService: HttpService ) { }
    private readonly ameliaReportUser: AmeliaReportUser = null;

    async findAll( params?: any ): Promise<any> {
        // const pageNumber = params.pageNumber || 1;
        // const pageLimit = params.pageLimit || 30;
        // const startDate = params.startDate || null;
        // const endDate = params.endDate || null;
        try {
            const response = await this.httpService.axiosRef( {
                method: 'GET',
                url: VIETJET_REPORTING_USER_ENDPOINT,
                params
            } );
            return response.data.result;
        } catch ( error ) {
            return error;
        }
    }

}