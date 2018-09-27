import { call, put, takeLatest } from 'redux-saga/effects'
import http from 'axios';
import { setEntrys, SET_ENTRYS, REQUEST_ENTRYS } from './actions/diary';

function* fetchBooks(action) {

    // const callFunc = http.get('http://localhost:8080/entry');

    try {
        const response = yield call(http, 'http://localhost:8080/entry');

        // const response = yield call(callFunc);

        yield put(setEntrys(response.data));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeLatest(REQUEST_ENTRYS, fetchBooks);
}

export default mySaga;