/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Carousel from 'components/Carousel';
import { Container } from 'components/Container';
import ImageContainer from 'components/ImageContainer';
import { makeSelectImages, makeSelectError, makeSelectLoading } from './selectors';
import BreakPoints from './BreakPointsConfig';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { loadImages } from './actions';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onPageLoad();
  }
  render() {
    const { loading, error, images } = this.props;
    return (
      <div>
        <div>
          {loading ? 'loading' : ''}
          {error ? 'error' : ''}
        </div>

        <Container>
          <Carousel
            cardsToShow={4}
            padding="0px 25px"
            margin="3em 0 0 0"
            breakpoints={BreakPoints}
          >
            {images && images.hits.length ? images.hits.map((h) =>
              <ImageContainer alt={h.tags} url={h.previewURL} key={h.id} />) : 'No images available'}
          </Carousel>
        </Container>

      </div>
    );
  }
}

Home.propTypes = {
  onPageLoad: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  loading: PropTypes.bool,
  images: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
};

const mapStateToProps = createStructuredSelector({
  images: makeSelectImages(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadImages()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
