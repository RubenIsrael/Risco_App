import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    LOGIN_START, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    REGISTRY_START, 
    REGISTRY_SUCCESS, 
    REGISTRY_ERROR,
    CATEGORIES_START,
    CATEGORIES_SUCCESS,
    CATEGORIES_ERROR
} from '../../consts/actionTypes';

import apiCall from '../api';

var headers = {
    'Accept': 'application/json'
}       

export function* postLogin({ payload }){
    try {
        const url = 'auth/login';
        const method = 'POST';
        const data = payload;
        const results = yield call(apiCall, url, method, headers, data);
        yield put({ type: LOGIN_SUCCESS, results: results.data})
    } catch (error) {
        yield put({ type: LOGIN_ERROR, error })
    }
};

export function* postRegistry({ payload }){
    try {
        const url = 'auth/signup';
        const method = 'POST';
        const data = payload;
        console.log('DATAAAA: ', data)
        const authorization = {
            'Content-Type': 'multipart/form-data'
        }
        headers = Object.assign({}, headers, authorization);
        const results = yield call(apiCall, url, method, headers, data);
        yield put({ type: REGISTRY_SUCCESS, results: results.data})
    } catch (error) {
        yield put({ type: REGISTRY_ERROR, error })
    }
};

export function* getCategories({ payload }){
    try {
        const url = 'client/getcategories';
        const method = 'GET';
        const authorization = {
            'Authorization': 'Bearer ' + payload.token
        }
        headers = Object.assign({}, headers, authorization);
        const results = yield call(apiCall, url, method, headers);
        yield put({ type: CATEGORIES_SUCCESS, results: results.data.categories})
    } catch (error) {
        yield put({ type: CATEGORIES_ERROR, error })
    }
};

export default function* itineraries(){
    yield takeLatest(LOGIN_START, postLogin);
    yield takeLatest(REGISTRY_START, postRegistry);
    yield takeLatest(CATEGORIES_START, getCategories);
}