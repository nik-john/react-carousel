import React from 'react';
import { shallow } from 'enzyme';

import { SlideWrapper } from '../index';

describe('<SlideWrapper />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <SlideWrapper id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <SlideWrapper>{children}</SlideWrapper>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
