import React from 'react';
import { shallow } from 'enzyme';

import { Container } from '../Styles';

describe('<ImageContainer />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Container id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Container>{children}</Container>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
