import gqlClient from '../configs/graphql';
import { gql } from '@apollo/client';

export const findAll = (params) => {
    return gqlClient.query({
        query: gql`
                    query getListUser ($queryInput: AmeliaReportUserRequest){
                        amelia_report_users(queryInput: $queryInput){
                            lngUserIdNmbr
                            strUserLogonName
                            strUserName
                        }
                        }
            `,
        variables: {
            queryInput: params
        }
    });
}

