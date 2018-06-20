import styled from 'styled-components';

export const SlideWrapper = styled.section`
  outline: none;
  min-height: 1px;
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  width: ${({ width }) => `${width}%`};
`;
