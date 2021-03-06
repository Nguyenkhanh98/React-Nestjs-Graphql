import {
    Resolver,
    Query,
    Mutation,
    Args,
    Subscription,
    Context,
    ResolveField,
    Parent,
} from '@nestjs/graphql';
import { User } from '../database/entities/user.entity';
import { Account } from '../database/entities/account.entity';

import { getRepository } from 'typeorm';
import {
    ApolloError,
    AuthenticationError,
    ForbiddenError,
    UserInputError
} from 'apollo-server-core';

import { } from '../generator/graphql.schema';
import { Logger, Request } from '@nestjs/common';

@Resolver( 'USER' )
export class UserResolver {

    @Query( () => [User] )
    async users(): Promise<User[]> {
        const users = await getRepository( User ).find( {
            relations: ['account']
        } );
        return users;
    }

    @Query( () => User )
    async me( @Context( 'currentUser' ) currentUser: User ): Promise<User> {
        return currentUser;
    }

}