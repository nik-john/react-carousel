
import { fromJS } from 'immutable';
import homeReducer from '../reducer';
import { loadImages, loadImagesSuccess, loadImagesError } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      images: false,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('responds to LOAD_IMAGES action', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false);
    expect(homeReducer(state, loadImages())).toEqual(expectedResult);
  });
  it('responds to LOAD_IMAGES_SUCCESS action', () => {
    const images = { a: 'b' };
    const expectedResult = state
      .set('loading', false)
      .set('error', false)
      .set('images', images);
    expect(homeReducer(state, loadImagesSuccess(images))).toEqual(expectedResult);
  });
  it('responds to LOAD_IMAGES_ERROR action', () => {
    const error = { message: 'b' };
    const expectedResult = state
      .set('loading', false)
      .set('error', error.message);
    expect(homeReducer(state, loadImagesError(error))).toEqual(expectedResult);
  });
});
