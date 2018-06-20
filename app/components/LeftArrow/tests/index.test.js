import React from 'react';
import { shallow } from 'enzyme';

import { LeftArrow } from '../index';

describe('<LeftArrow />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <LeftArrow id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <LeftArrow>{children}</LeftArrow>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
