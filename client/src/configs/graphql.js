import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { logout } from '../helpers/auth';
import { getAuth } from '../helpers/auth';
import { GraphService } from '../services';
import { setContext } from '@apollo/client/link/context';
import history from '../history';
import config from './';

const httpLink = createHttpLink({
    uri: config.api.GRAPH_QL
})

const authLink = setContext((_, { headers }) => {
    const token = getAuth() ? getAuth().accessToken : null;
    return {
        headers: {
            ...headers,
            'access_token': token ? `${token}` : ""
        }
    }
});

const logoutLink = onError(async ({ graphQLErrors, networkError, response, operation, forward }) => {
    if (graphQLErrors && graphQLErrors[0]) {
        const code = graphQLErrors[0].code;

        if (code === "UNAUTHENTICATED") {
            try {
                await GraphService.AADlogin();

            } catch (error) {
                logout();
            }
            // return forward(operation);
        }
    }

    if (networkError) {
        console.log(networkError);

    }
    return forward(operation);
});

const client = new ApolloClient({
    link: from([
        authLink,
        logoutLink,
        httpLink
    ]),
    cache: new InMemoryCache(),
});

export default client;

