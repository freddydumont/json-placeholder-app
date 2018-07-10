import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';

import { ALBUMS_REQUESTED, POSTS_REQUESTED, USERS_REQUESTED } from './actions';

/**
 * GETs the resource on the API endpoint using axios
 * @param {string} resource lowercase string to append to endpoint
 */
function fetchResource(resource) {
  const endpoint = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
  return endpoint.get(resource);
}

/**
 * Worker Saga responsible for calling the fetch function and handling errors
 * @param {Object} action Automatically passed by takeEvery
 * @param {string} meta contains the lowercase string referring to action
 */
function* fetchResourceSaga({ meta }) {
  const RESOURCE = meta.toUpperCase();
  try {
    const data = yield call(fetchResource, meta);
    yield put({ type: `${RESOURCE}_RESOLVED`, payload: data, meta });
  } catch (error) {
    yield put({ type: `${RESOURCE}_REJECTED`, payload: error, meta });
  }
}

export default function* rootSaga() {
  yield takeEvery(POSTS_REQUESTED, fetchResourceSaga);
  yield takeEvery(ALBUMS_REQUESTED, fetchResourceSaga);
  yield takeEvery(USERS_REQUESTED, fetchResourceSaga);
}
