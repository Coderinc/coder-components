import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme, color }) => (color ? theme[color] : theme.primaryFont)};
  font-size: 2.25rem;
  line-height: 3.375rem;
  font-weight: ${({ light }) => (light ? 'lighter' : 'bold')};
`;

H1.propTypes = {
  light: PropTypes.bool,
};

H1.defaultProps = {
  light: false,
};

export default H1;
