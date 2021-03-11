import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

import { getRepository } from 'typeorm';

import { LoginResponse } from '../generator/graphql.schema';

import {
    authenticateAAD, tradeToken
} from '../auth';
import { ApolloError } from 'apollo-server-core';
import { User } from 'src/database/entities';


@Resolver( 'Auth' )

export class AuthResolver {
    @Mutation()
    async oauthAAD(
        @Args( 'accessToken' ) accessToken: String,
        @Context() context: any
    ): Promise<LoginResponse> {
        const { req, res } = context;
        req.body = {
            ...req.body, access_token: accessToken
        };

        // let token;

        try {
            const response = await authenticateAAD( req, res );

            const { token } = response;
            console.log( response );
            const { preferred_username } = token;

            let user;
            user = await getRepository( User ).createQueryBuilder( "users" )
                .innerJoinAndSelect( "users.account", "account" ).where( `account.email=:email AND is_lock=false`, { email: preferred_username } ).getOne()
            if ( user ) {
                const tokenData = await tradeToken( user );
                console.log( tokenData );
                return tokenData;
            }
            // return 
        } catch ( error ) {
            if ( error.info ) {
                throw new ApolloError( 'invalid token' );
            }
            Logger.log( error );
            throw new ApolloError( 'Something went wrong' )

        }
        return null;
        // return await tradeToken( token );
    }
}



