import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  background-color: ${({
    disabled, secondary, ternary, theme, color,
  }) => {
    if (disabled) {
      return theme.offsetBackground;
    }

    if (secondary || ternary) {
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

  margin: 1rem 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  letter-spacing: 0.0625rem;
  outline: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-weight: 200;
  width: ${({ width }) => width}px;
  max-width: 100%;
  position: relative;
  text-align: ${({ reversed }) => (reversed ? 'right' : 'left')};
  transition: 0.5s ease all;

  box-shadow: ${({ disabled }) => (disabled ? undefined : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)')};

  &::before,
  &::after {
    position: absolute;
    content: '\f100';
    font-family: coder-icons;
    font-size: 1rem;
    transition: 0.5s ease all;
  }

  &::before {
    transform: scaleX(-1);
    display: ${({ reversed }) => (reversed ? undefined : 'none')};
    left: 24px;
  }

  &:hover::before {
    left: ${({ disabled }) => (disabled ? undefined : '16px')};
  }

  &::after {
    display: ${({ reversed }) => (reversed ? 'none' : undefined)};
    right: 24px;
  }

  &:hover::after {
    right: ${({ disabled }) => (disabled ? undefined : '16px')};
  }

  &:hover {
    color: ${({ ternary, theme, color }) => (ternary ? theme[color || 'primary'] : undefined)};
    box-shadow: ${({ disabled }) => (disabled ? undefined : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)')};
  }
`;

const Button = ({ label, ...props }) => (
  <ButtonDiv {...props}>
    {label}
  </ButtonDiv>
);

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Click',
};

export default Button;
