import * as dotenv from 'dotenv';
dotenv.config();

// enviroment

const NODE_ENV: string = process.env.NODE_ENV || 'development';

// application
const VOYAGER: string = process.env.VOYAGER || 'voyager'

const FE_URL: string = process.env.FE_URL || 'xxx'
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 8080;
const END_POINT: string = process.env.END_POINT || 'graphql'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3;

// static 
const STATIC: string = process.env.STATIC || 'static'

//test db



// postgres

const POSTGRES_USER = process.env.POSTGRES_USER || 'dev';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'dev';
const POSTGRES_HOST = process.env.POSTGRES_HOST || 'localhost';
const POSTGRES_PORT = process.env.POSTGRES_PORT || 5432;
const POSTGRES_DB = process.env.LPDB_DB || 'VietjetData';

const POSTGRES_URL = process.env.POSTGRES_URL ||
    `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`

const environment = {
    development: {
        url: POSTGRES_URL
    },
    production: {
        url: ``
    }
}

const TYPEORM = environment[NODE_ENV]


// jwt

const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'access-token-key'
const ISSUER: string = process.env.ISSUER || 'https://login.microsoftonline.com/402d0e12-de7f-4ed6-8704-7d02bc11fac0/v2.0';
const AUDIENCE: string = process.env.AUDIENCE || '5f471bd1-ac06-4f49-88d7-d852c2e14fb5';

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

// aad

const AAD_IDENTITY = process.env.AAD_IDENTITY || 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration';
const CLIENT_ID = process.env.CLIENT_ID || '5f471bd1-ac06-4f49-88d7-d852c2e14fb5';


export {
    NODE_ENV,
    DOMAIN,
    PORT,
    END_POINT,
    RATE_LIMIT_MAX,
    GRAPHQL_DEPTH_LIMIT,
    STATIC,
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_URL,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    TYPEORM,
    ACCESS_TOKEN_SECRET,
    BCRYPT_SALT,
    FE_URL,
    VOYAGER,
    AAD_IDENTITY,
    CLIENT_ID,
    ISSUER,
    AUDIENCE

}