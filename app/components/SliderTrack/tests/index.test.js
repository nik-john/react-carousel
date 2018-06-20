import React from 'react';
import { shallow } from 'enzyme';

import { SliderTrack } from '../index';

describe('<SliderTrack />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <SliderTrack id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <SliderTrack>{children}</SliderTrack>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
