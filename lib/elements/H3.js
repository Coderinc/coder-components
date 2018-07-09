import styled from 'styled-components';

export default styled.h3`
  color: ${props => props.theme.primaryFont};
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: ${props => (props.light ? 'lighter' : 'bold')};
`;

