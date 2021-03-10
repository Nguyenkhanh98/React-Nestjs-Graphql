import { createReducer } from '@reduxjs/toolkit';

import { UserConstant } from '../actions/constants';

const {
    AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS
} = UserConstant;
const initialState = {
    user: null,
    loading: true,
    error: null,
    isAuth: false
};

const UserReducer = createReducer(initialState, (builder) => {
    builder.addCase(AAD_LOGIN_CLICK, () => {
        return {
            user: null,
            loading: true,
            error: null,
            isAuth: false,
        };
    })
        .addCase(AAD_LOGIN_SUCCESS, () => {
            return {
                ...state,
                user: user,
                isAuth: true,
                loading: false,
            };
        });
});

export default UserReducer;