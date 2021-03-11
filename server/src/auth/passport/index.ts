import passport from 'passport';
import { BearerStrategy } from 'passport-azure-ad';

import { CLIENT_ID, AAD_IDENTITY, ISSUER, AUDIENCE } from '../../config/environments';

interface OAuthResponse {
    readonly token: any
}

var options = {
    identityMetadata: AAD_IDENTITY,
    clientID: CLIENT_ID,
    validateIssuer: true,
    passReqToCallback: false,
    issuer: ISSUER,
    loggingLevel: 'info',
    audience: AUDIENCE
};

const AADTokenStrategyCallback = async (
    token,
    done
) => done( null, {
    token
} );
passport.use( new BearerStrategy( options, AADTokenStrategyCallback ) );

export const authenticateAAD = ( req, res ): Promise<OAuthResponse> => {
    return new Promise( ( resolve, reject ) => {
        passport.authenticate( 'oauth-bearer', { session: false },
            ( err, data, info ) => {

                if ( err ) {
                    reject( err );
                }

                if ( info ) {
                    reject( { info } );
                }

                resolve( data );
            } )( req, res )
    } );
}