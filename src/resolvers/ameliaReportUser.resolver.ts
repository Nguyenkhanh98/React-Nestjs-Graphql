import {
    Resolver,
    Query,
    Args,

} from '@nestjs/graphql';
import { AmeliaReportUser, AmeliaReportUserRequest } from '../generator/graphql.schema';
import { Logger, Request } from '@nestjs/common';
import { ameliaReportUserService } from '../services';

@Resolver( 'AmeliaReportUser' )
export class AmeliaReportUserResolver {
    constructor( private readonly ameliaReportUser: ameliaReportUserService ) { }


    @Query( () => [AmeliaReportUser] )
    async amelia_report_users(
        @Args( 'queryInput' ) queryInput: AmeliaReportUserRequest,
    ): Promise<[AmeliaReportUser]> {
        return await this.ameliaReportUser.findAll( queryInput );
    }

}