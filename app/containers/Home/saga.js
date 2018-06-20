import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_IMAGES } from 'containers/Home/constants';
import { loadImagesSuccess, loadImagesError } from 'containers/Home/actions';

/**
 *Pixabay API handler
 */
export function* getImages() {
  // const API_KEY = process.env.API_KEY;
  const API_KEY = '9338657-e7b2ac124243b90813e3ed097';
  const requestURL = `https://pixabay.com/api?q=cats&min_width=200&min_height=200&key=${API_KEY}`;
  try {
    const images = yield call(request, requestURL);
    yield put(loadImagesSuccess(images));
  } catch (err) {
    yield put(loadImagesError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_IMAGES, getImages);
}
