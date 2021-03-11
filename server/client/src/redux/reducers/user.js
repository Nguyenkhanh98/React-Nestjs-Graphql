import { createReducer } from '@reduxjs/toolkit';

import { UserConstant } from '../actions/constants';

const {
    AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS, AAD_LOGOUT_CLICK
} = UserConstant;
const initialState = {
    loading: false,
    error: null,
    isAuth: false
};

const UserReducer = createReducer(initialState, (builder) => {
    builder.addCase(AAD_LOGIN_CLICK, () => {
        return {
            loading: true,
            error: null,
            isAuth: false,
        };
    })
        .addCase(AAD_LOGIN_SUCCESS, () => {
            return {
                ...initialState,
                isAuth: true,
                loading: false,
            };
        })
        .addCase(AAD_LOGIN_PENDING, () => {
            return {
                initialState
            };
        }).addCase(AAD_LOGIN_FAILED, (payload) => {
            return {
                ...initialState,
                isAuth: false,
                error: payload.error
            }
        }).addCase(AAD_LOGOUT_CLICK, () => {
            return initialState

        })
});

export default UserReducer;