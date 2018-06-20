import { fromJS } from 'immutable';
import { selectHomeDomain, makeSelectImages } from '../selectors';

describe('selectHomeDomain', () => {
  it('should select the global state', () => {
    const homeState = fromJS({});
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHomeDomain(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectImages', () => {
  const currentUserSelector = makeSelectImages();
  it('should select images', () => {
    const images = 'a';
    const mockedState = fromJS({
      home: {
        images,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(images);
  });
});
