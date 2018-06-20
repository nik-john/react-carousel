import React from 'react';
import { shallow } from 'enzyme';

import { PaginationDot } from '../index';

describe('<PaginationDot />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <PaginationDot id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <PaginationDot>{children}</PaginationDot>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
