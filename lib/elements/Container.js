import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-height: 100%;
  max-width: ${({ small, large, extraLarge }) => {
    if (small) {
      return '40rem';
    }
    if (large) {
      return '75rem';
    }
    if (extraLarge) {
      return '100rem';
    }
    return '50rem';
  }};
`;

Container.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  extraLarge: PropTypes.bool,
};

Container.defaultProps = {
  small: false,
  large: false,
  extraLarge: false,
};

export default Container;
