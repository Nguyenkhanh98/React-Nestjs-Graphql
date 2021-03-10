
import { createAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GraphService } from '../../services';

import { UserConstant } from './constants';

const { AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS } = UserConstant;

export const loginAction = createAction(AAD_LOGIN_CLICK);

export const loginPending = createAction(AAD_LOGIN_PENDING);

export const loginSuccess = createAction(AAD_LOGIN_SUCCESS, (user) => {
    return {
        payload: { user }
    };
});

export const loginFailed = createAction(AAD_LOGIN_FAILED, (error) => {
    return {
        payload: { error }
    };
});