import styled from 'styled-components';

export default styled.h1`
  color: ${props => props.theme.primaryFont};
  font-size: 2.25rem;
  line-height: 3.375rem;
  font-weight: ${props => (props.light ? 'lighter' : 'bold')};
`;

