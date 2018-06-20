
import {
  loadImages, loadImagesSuccess, loadImagesError,
} from '../actions';
import {
  LOAD_IMAGES, LOAD_IMAGES_SUCCESS, LOAD_IMAGES_ERROR,
} from '../constants';

describe('Home actions', () => {
  describe('loadImages Action', () => {
    it('has a type of LOAD_IMAGES', () => {
      const expected = {
        type: LOAD_IMAGES,
      };
      expect(loadImages()).toEqual(expected);
    });
  });
  describe('loadImages Action', () => {
    it('has a type of LOAD_IMAGES_SUCCESS', () => {
      const images = 'a';
      const expected = {
        type: LOAD_IMAGES_SUCCESS,
        images,
      };
      expect(loadImagesSuccess(images)).toEqual(expected);
    });
  });
  describe('loadImages Action', () => {
    it('has a type of LOAD_IMAGES_ERROR', () => {
      const error = { message: 'a' };
      const expected = {
        type: LOAD_IMAGES_ERROR,
        error,
      };
      expect(loadImagesError(error)).toEqual(expected);
    });
  });
});
