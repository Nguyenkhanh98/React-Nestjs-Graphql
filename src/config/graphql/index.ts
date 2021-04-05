import { Injectable, Logger } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { MemcachedCache } from 'apollo-server-cache-memcached';
import { PubSub } from 'graphql-subscriptions';

import schemaDirectives from './schemaDirectives';
import { AuthenticationError, GraphQLExtension } from 'apollo-server-core';
import { MockList } from 'graphql-tools';
import depthLimit from 'graphql-depth-limit';

import { getRepository } from 'typeorm';
import * as chalk from 'chalk';
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { END_POINT, NODE_ENV, FE_URL, GRAPHQL_DEPTH_LIMIT, ACCESS_TOKEN } from '../environments';
import { User } from '../../database/entities';
import { verifyToken } from '../../auth';

const pubsub = new PubSub()

@Injectable()

export class GraphQLService implements GqlOptionsFactory {
    async createGqlOptions(): Promise<GqlModuleOptions> {
        return {
            typePaths: ['./**/*.graphql'],

            resolverValidationOptions: {
                requireResolversForResolveType: false
            },
            path: `/${END_POINT}`,
            resolvers: {
                JSON: GraphQLJSON,
                JSONObject: GraphQLJSONObject
            },
            schemaDirectives,
            introspection: true,
            playground: true,

            cors: NODE_ENV === 'production' ?
                {
                    origin: FE_URL,
                    credentials: true
                }
                : true,
            bodyParserConfig: { limit: '50mb' },
            // onHealthCheck: () => {
            //     return new Promise( ( resolve, reject ) => {

            //     } )
            // },
            validationRules: [
                depthLimit(
                    GRAPHQL_DEPTH_LIMIT,
                    {
                        ignore: [/_trusted$/, 'idontcare']
                    },
                    depths => {
                        // Logger.warn(
                        //     ` You can only descend ${chalk
                        //         // .hex( PRIMARY_COLOR! )
                        //         .bold( `${GRAPHQL_DEPTH_LIMIT!}` )} levels.`,
                        //     'GraphQL',
                        //     false
                        // )
                    }
                )
            ],

            tracing: NODE_ENV !== 'production',
            cacheControl: NODE_ENV === 'production' && {
                defaultMaxAge: 5,
                stripFormattedExtensions: false,
                calculateHttpHeaders: false,
            },
            persistedQueries: {
                cache: new MemcachedCache(
                    ['memcached-server-1'],
                    {
                        retries: 10, retry: 1000
                    }
                )
            },
            installSubscriptionHandlers: true,
            uploads: {
                maxFieldSize: 2,
                maxFileSize: 20,
                maxFiles: 5
            },
            context: async ( { req, res, connection } ) => {
                if ( connection ) {
                    const { currentUser } = connection.context;
                    return {
                        pubsub,
                        currentUser
                    }
                }

                let currentUser;

                const token = req.headers[ACCESS_TOKEN] || '';

                if ( token ) {
                    currentUser = await verifyToken( token, 'accessToken' );
                }

                return {
                    req, res, pubsub, currentUser, trackErrors( error ) {
                        console.log( error )
                    }
                }
            },
            formatError: error => {
                return {
                    message: error.message,
                    code: error.extensions && error.extensions.code,
                    locations: error.locations,
                    path: error.path
                }
            },
            formatResponse: response => {
                return response;
            }
        }
    }
}