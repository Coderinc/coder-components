import PropTypes from 'prop-types';
import styled from 'styled-components';

const H3 = styled.h3`
  color: ${({ theme }) => theme.primaryFont};
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: ${({ light }) => (light ? 'lighter' : 'bold')};
`;

H3.propTypes = {
  light: PropTypes.bool,
};

H3.defaultProps = {
  light: false,
};

export default H3;
