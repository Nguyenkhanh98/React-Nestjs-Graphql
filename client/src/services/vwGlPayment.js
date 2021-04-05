import gqlClient from '../configs/graphql';
import { gql } from '@apollo/client';

export const findAll = (params) => {
    return gqlClient.query({
        query: gql`
                    query{
                        vwGlPayment_base{
                            pageSize,
                            totalPage,
                            totalCount,
                            isAllDataLoaded,
                            currentPage,
                            items {
                            LngReservationNmbr,
                            DtmCreationDate,
                            DtmGlPaymentsDate,
                            StrGlCardNmbr
                            }
                        }
                        }
            `
    });
}

