import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.primaryFont};
`;
