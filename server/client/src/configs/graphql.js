import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { getAuth } from '../helpers/auth';
import { setContext } from '@apollo/client/link/context';
import config from './';

const httpLink = createHttpLink({
    uri: config.api.GRAPH_QL
})

const authLink = setContext((_, { headers }) => {
    const token = getAuth() ? getAuth().accessToken : null;
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;

