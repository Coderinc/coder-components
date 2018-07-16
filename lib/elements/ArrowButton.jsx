import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  background-color: ${({
    disabled, secondary, theme, color,
  }) => {
    if (disabled) {
      return theme.offsetBackground;
    }

    if (secondary) {
      return theme.activeBackground;
    }
    return theme[color || 'primary'];
  }};

  color: ${({
    disabled, secondary, ternary, theme, color,
  }) => {
    if (disabled) {
      return theme.offsetFont;
    }

    if (ternary) {
      return theme.offsetFont;
    }
    if (secondary) {
      return theme[color || 'primary'];
    }
    return theme.primaryFont;
  }};

  outline: none;
  border: none;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.5rem;
  width: 2.5rem;
  padding: 0.75rem;
  margin: 1rem;
  border-radius: 50%;
  box-sizing: border-box;

  box-shadow: ${({ disabled }) => (disabled ? undefined : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)')};
  transition: 0.5s ease all;

  &::before {
    content: '\f100';
    font-size: 0.875rem;
    font-family: coder-icons;
    transform: ${({ reversed }) => (reversed ? 'scaleX(-1)' : undefined)};
  }

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? undefined : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)')};
  }
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  reversed: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  color: 'primary',
  reversed: false,
};

export default Button;
