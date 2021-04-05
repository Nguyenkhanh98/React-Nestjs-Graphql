import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GraphService } from '../../services';
import { UserAction } from '../actions';
import { UserConstant } from '../actions/constants';
import { LocalStorage } from '../../constants';

const { IS_AUTH, AUTHORITY } = LocalStorage;


const { AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS } = UserConstant;

function* aadLogin() {
    try {
        yield put(UserAction.loginPending());
        const response = yield GraphService.AADlogin();
        const { oauthAAD } = response.data;
        const { accessToken, expiresIn } = oauthAAD;


        localStorage.setItem(IS_AUTH, true);
        localStorage.setItem(AUTHORITY, JSON.stringify({ accessToken, expiresIn }));

        toastr.success('Success!');
        yield put(UserAction.loginSuccess());
    } catch (error) {
        toastr.error('Error!');
        yield put(UserAction.loginFailed(error));

        localStorage.removeItem(IS_AUTH);
        localStorage.removeItem(AUTHORITY);
    }
}
function* watchUserLogin() {
    yield takeEvery(AAD_LOGIN_CLICK, aadLogin);

}

export default function* userSaga() {
    yield all([fork(watchUserLogin)]);
}
