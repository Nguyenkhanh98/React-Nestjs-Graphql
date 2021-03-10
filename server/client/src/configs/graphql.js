import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import configs from './';

const client = new ApolloClient({
    link: new HttpLink({ uri: configs.api.GRAPH_QL }),
    cache: new InMemoryCache()
});

export default client;

