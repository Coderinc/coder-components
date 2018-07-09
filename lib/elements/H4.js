import styled from 'styled-components';

export default styled.h4`
  color: ${props => props.theme.primaryFont};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${props => (props.light ? 'lighter' : 'bold')};
`;

