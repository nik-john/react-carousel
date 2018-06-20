import React from 'react';
import { shallow } from 'enzyme';

import { RightArrow } from '../index';

describe('<RightArrow />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <RightArrow id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <RightArrow>{children}</RightArrow>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
