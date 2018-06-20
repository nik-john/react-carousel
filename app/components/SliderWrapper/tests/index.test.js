import React from 'react';
import { shallow } from 'enzyme';

import { SliderWrapper } from '../index';

describe('<SliderWrapper />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <SliderWrapper id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <SliderWrapper>{children}</SliderWrapper>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
