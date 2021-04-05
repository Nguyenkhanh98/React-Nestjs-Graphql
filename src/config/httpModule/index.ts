import { Injectable, Logger } from '@nestjs/common';
import { HttpModuleOptions } from '@nestjs/common/http';
import https from 'https';
import { HttpModuleOptionsFactory } from '@nestjs/common/http';
import { VIETJET_REPORTING_SERVICE, VIETJET_REPORTING_AUTH_USERNAME, VIETJET_REPORTING_AUTH_PASSWORD } from '../environments';

@Injectable()
export class HttpConfigService implements HttpModuleOptionsFactory {

    createHttpOptions(): HttpModuleOptions {
        let httpsAgent = null;
        if ( process.env.NODE_ENV !== 'production' ) {
            httpsAgent = new https.Agent( {
                rejectUnauthorized: false,
            } )
        }
        return {
            baseURL: VIETJET_REPORTING_SERVICE,
            auth: {
                username: VIETJET_REPORTING_AUTH_USERNAME,
                password: VIETJET_REPORTING_AUTH_PASSWORD
            },
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            httpsAgent
        };
    }
}