import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  color: ${({ theme, color }) => (color ? theme[color] : theme.primaryFont)};
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: ${({ light }) => (light ? 'lighter' : 'bold')};
`;

H2.propTypes = {
  light: PropTypes.bool,
};

H2.defaultProps = {
  light: false,
};

export default H2;
