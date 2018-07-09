import styled from 'styled-components';

export default styled.p`
  color: ${props => props.theme.primaryFont};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: ${props => (props.bold ? 'bold' : 'lighter')};
`;

