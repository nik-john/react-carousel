import { put } from 'redux-saga/effects';
import { getImages } from '../saga';
import { loadImagesSuccess, loadImagesError } from '../actions';

/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';
// import { defaultSaga } from '../saga';

// const generator = defaultSaga();

describe('defaultSaga Saga', () => {
  let getImagesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getImagesGenerator = getImages();

    const callDescriptor = getImagesGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the loadImagesSuccess action if it requests the data successfully', () => {
    const response = [{
      name: 'First image',
    }, {
      name: 'Second image',
    }];
    const putDescriptor = getImagesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadImagesSuccess(response)));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getImagesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadImagesError(response)));
  });
});
