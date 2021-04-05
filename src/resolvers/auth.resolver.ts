import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

import { getRepository } from 'typeorm';

import { LoginResponse } from '../generator/graphql.schema';

import {
    authenticateAAD, tradeToken
} from '../auth';
import { ApolloError } from 'apollo-server-core';
import { Account, User } from 'src/database/entities';
import { Provider } from 'src/database/enum';

@Resolver( 'Auth' )

export class AuthResolver {
    @Mutation()
    async oauthAAD(
        @Args( 'accessToken' ) accessToken: string,
        @Context() context: any
    ): Promise<LoginResponse> {
        const { req, res } = context;
        req.body = {
            ...req.body, access_token: accessToken
        };

        try {
            const response = await authenticateAAD( req, res );

            const { token } = response;
            const { preferred_username, name } = token;

            const user = await getRepository( User ).createQueryBuilder( "users" )
                .innerJoinAndSelect( "users.account", "account" ).where( `account.email=:email AND is_lock=false`, { email: preferred_username } ).getOne()

            if ( user ) {
                const tokenData = await tradeToken( user );
                return tokenData;
            }
            const splitName = name.split( ' ' );

            splitName.pop();

            const lastName = splitName.pop();
            const firstName = splitName.join( ' ' );
            const newAccount = new Account();

            newAccount.email = preferred_username;
            newAccount.name = name;
            newAccount.provider = Provider.Microsoft;

            const newUser = new User( {
                lastName,
                firstName,
                createdAt: new Date(),
                account: newAccount
            } );

            const userAdded = await getRepository( User ).save( newUser );

            const tokenData = await tradeToken( userAdded );
            return tokenData;

        } catch ( error ) {
            if ( error.info ) {
                throw new ApolloError( 'invalid token' );
            }
            Logger.log( error );
            throw new ApolloError( 'Something went wrong' )

        }
    }
}



