import gqlClient from '../configs/graphql';
import { gql } from '@apollo/client';

export const login = (token) => {
    return gqlClient.mutate({
        mutation: gql`
                    mutation oauth($accessToken: String){
                        oauthAAD (accessToken: $accessToken) {
                        accessToken,
                        expiresIn
                        }
                
                    }
            `,
        variables: {
            accessToken: token
        }
    });
}

