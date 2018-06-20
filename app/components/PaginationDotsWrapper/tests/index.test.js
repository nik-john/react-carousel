import React from 'react';
import { shallow } from 'enzyme';

import { PaginationDotsWrapper } from '../index';

describe('<PaginationDotsWrapper />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <PaginationDotsWrapper id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <PaginationDotsWrapper>{children}</PaginationDotsWrapper>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
