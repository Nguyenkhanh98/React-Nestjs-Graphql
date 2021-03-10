import * as passport from 'passport';
import { BearerStrategy } from 'passport-azure-ad';

import { CLIENT_ID, AAD_IDENTITY } from '../../config/environments';

interface OAuthResponse {
    readonly data: any
    readonly info: any
}

var options = {
    identityMetadata: AAD_IDENTITY,
    clientID: CLIENT_ID,
    validateIssuer: true,
    passReqToCallback: false,
};

const AADTokenStrategyCallback = async (
    accessToken,
    refreshToken,
    profile,
    done
) => done( null, {
    accessToken,
    refreshToken,
    profile
} )

console.log( passport.use );
passport.use( new BearerStrategy( options, AADTokenStrategyCallback ) );

export const authenticateAAD = ( req, res ): Promise<OAuthResponse> => {
    return new Promise( ( resolve, reject ) => {
        passport.authenticate( 'oauth-bearer', { session: false },
            ( err, data, info ) => {
                if ( err ) {
                    reject( err );
                }
                resolve( info );
            } )( req, res )
    } );
}