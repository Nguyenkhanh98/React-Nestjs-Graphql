import { NODE_ENV, POSTGRES_URL, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_PORT, POSTGRES_DB } from './config/environments';

const orm = {
    development: {
        url: POSTGRES_URL
    },
    testing: {
        url: POSTGRES_URL
    }
}

export default orm[NODE_ENV];