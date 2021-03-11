import { User } from '../../database/entities';
import { AuthenticationError, ForbiddenError } from 'apollo-server-core'
import { sign, verify } from 'jsonwebtoken';
import { LoginResponse } from '../../generator/graphql.schema'

import { ISSUER, ACCESS_TOKEN_SECRET, AUDIENCE } from '../../config/environments';
import { Console } from 'console';

type TokenType =
    | 'accessToken'
    | 'refreshToken'
    | 'emailToken'
    | 'resetPassToken';

const common = {
    accessToken: {
        privateKey: ACCESS_TOKEN_SECRET,
        signOptions: {
            expiresIn: 60 * 60 * 24 * 2 // 2d
        }
    },
    refreshToken: {
        privateKey: 'REFRESH_TOKEN_SECRET',
        signOptions: {
            expiresIn: 60 * 60 * 24 * 2 // 7d
        }
    },
    emailToken: {
        privateKey: 'EMAIL_TOKEN_SECRET',
        signOptions: {
            expiresIn: 60 * 60 * 24 * 2 // 1d
        }
    },
    resetPassToken: {
        privateKey: 'RESETPASS_TOKEN_SECRET',
        signOptions: {
            expiresIn: 60 * 60 * 24 * 2 // 1d
        }
    }
}

export const generateToken = async (
    user: User,
    type: TokenType
): Promise<LoginResponse> => {
    const token = await sign(
        {
            id: user.id
        },
        common[type].privateKey,
        {
            issuer: ISSUER,
            subject: user.account.email,
            audience: AUDIENCE,
            algorithm: 'HS256',
            expiresIn: common[type].signOptions.expiresIn
        }
    )

    return { accessToken: token, expiresIn: common[type].signOptions.expiresIn }
}


export const tradeToken = async ( user: User ): Promise<LoginResponse> => {
    // if ( !user.isVerified ) {
    //     throw new ForbiddenError( 'Please verify your email.' )
    // }

    // if ( !user.isActive ) {
    //     throw new ForbiddenError( "User already doesn't exist." )
    // }

    if ( user.isLocked ) {
        throw new ForbiddenError( 'Your email has been locked.' )
    }

    const accessToken = await generateToken( user, 'accessToken' )
    const refreshToken = await generateToken( user, 'refreshToken' )
    return accessToken;
}
