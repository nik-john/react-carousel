/*
 *
 * Home actions
 *
 */

import {
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_IMAGES_SUCCESS,
} from './constants';

export function loadImages() {
  return {
    type: LOAD_IMAGES,
  };
}
export function loadImagesSuccess(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images,
  };
}
export function loadImagesError(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error,
  };
}
