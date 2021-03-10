import gqlClient from '../configs/graphql';
import { gql } from '@apollo/client';

export const login = async () => {
    try {
        const data = await gqlClient.query({
            query: gql`
                {
                    users{
                        id
                    }
                }
            `
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

