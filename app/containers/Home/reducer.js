/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_IMAGES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  images: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_IMAGES:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_IMAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('images', action.images);
    case LOAD_IMAGES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error.message);
    default:
      return state;
  }
}

export default homeReducer;
