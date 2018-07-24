import PropTypes from 'prop-types';
import styled from 'styled-components';

const H4 = styled.h4`
  color: ${({ theme, color }) => (color ? theme[color] : theme.primaryFont)};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${({ light }) => (light ? 'lighter' : 'bold')};
`;

H4.propTypes = {
  light: PropTypes.bool,
};

H4.defaultProps = {
  light: false,
};

export default H4;
