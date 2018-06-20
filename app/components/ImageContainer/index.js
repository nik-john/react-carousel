/**
*
* ImageContainer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Img, Container } from './Styles';


function ImageContainer(props) {
  const { url, alt } = props;
  return (
    <Container>
      <Img src={url} alt={alt} />
    </Container>
  );
}

ImageContainer.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageContainer;
