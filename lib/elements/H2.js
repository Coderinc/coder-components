import styled from 'styled-components';

export default styled.h2`
  color: ${props => props.theme.primaryFont};
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: ${props => (props.light ? 'lighter' : 'bold')};
`;

