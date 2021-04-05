import axios from 'axios';
import { VIETJET_REPORTING_SERVICE, VIETJET_REPORTING_AUTH_USERNAME, VIETJET_REPORTING_AUTH_PASSWORD } from '../environments';

export const makeRequest = axios.create( {
    baseURL: VIETJET_REPORTING_SERVICE,
    auth: {
        username: VIETJET_REPORTING_AUTH_USERNAME,
        password: VIETJET_REPORTING_AUTH_PASSWORD
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
} );