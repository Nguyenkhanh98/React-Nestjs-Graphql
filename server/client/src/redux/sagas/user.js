import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { GraphService } from '../../services';
import { UserAction } from '../actions';
import { UserConstant } from '../actions/constants';

const { AAD_LOGIN_PENDING, AAD_LOGIN_CLICK, AAD_LOGIN_FAILED, AAD_LOGIN_SUCCESS } = UserConstant;

function* aadLogin() {
    try {
        yield put(UserAction.loginPending());
        const response = yield GraphService.AADlogin();
        toastr.success('Success!');
        console.log(response);
        yield put(UserAction.loginSuccess(response));
    } catch (error) {
        toastr.error('Error!');
        yield put(UserAction.loginFailed(error));
    }
}
function* watchUserLogin() {
    yield takeEvery(AAD_LOGIN_CLICK, aadLogin);

}

export default function* userSaga() {
    yield all([fork(watchUserLogin)]);
}
