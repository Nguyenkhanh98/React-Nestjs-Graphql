import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

import { getRepository } from 'typeorm';

import { LoginResponse } from '../generator/graphql.schema';

import {
    authenticateAAD, tradeToken
} from '../auth';
import { ApolloError } from 'apollo-server-core';


@Resolver( 'Auth' )

export class AuthResolver {
    @Mutation()
    async oauthAAD(
        @Args( 'accessToken' ) accessToken: String,
        @Context() context: any
    ): Promise<LoginResponse> {
        const { req, res } = context;
        req.body = {
            ...req.body, accessToken: accessToken
        };
        let user;

        Logger.log( 'sadasdas' );
        process.stdout.write( 'asdsad' );
        console.log( 'asdssss' );

        const response = await authenticateAAD( req, res );
        const { data, info } = response;
        Logger.log( 'sadasdas' );
        console.log( 'asdssss' );
        if ( data ) {
            console.log( data );
        }

        if ( info ) {
            console.log( info );
            throw new ApolloError( 'Something went wrong' )

        }

        return await tradeToken( user );
    }
}



