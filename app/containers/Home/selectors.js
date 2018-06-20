import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = (state) => state.get('home');

/**
 * Other specific selectors
 */
const makeSelectImages = () => createSelector(
  selectHomeDomain,
  (carouselDomain) => carouselDomain.get('images')
);
const makeSelectLoading = () => createSelector(
  selectHomeDomain,
  (carouselDomain) => carouselDomain.get('loading')
);
const makeSelectError = () => createSelector(
  selectHomeDomain,
  (carouselDomain) => carouselDomain.get('error')
);


/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(
  selectHomeDomain,
  (substate) => substate.toJS()
);

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectImages,
  makeSelectError,
  makeSelectLoading,
};
