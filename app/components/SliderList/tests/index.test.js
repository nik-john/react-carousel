import React from 'react';
import { shallow } from 'enzyme';

import { SliderList } from '../index';

describe('<SliderList />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <SliderList id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <SliderList>{children}</SliderList>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
