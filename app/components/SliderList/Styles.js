import styled from 'styled-components';

export const SliderList = styled.div`
  transform: translateX(${({ translateX }) => translateX ? `-${translateX}%` : '0%'});
  transition: transform 0.6s ease-in-out;
`;
