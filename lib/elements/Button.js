import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  background-color: ${props => {
    if (props.disabled) {return props.theme.offsetBackground;}

    if (props.secondary || props.ternary) {return props.theme.activeBackground;}
    return props.theme[props.color || 'primary'];
  }};

  color: ${props => {
    if (props.disabled) {return props.theme.offsetFont;}

    if (props.ternary) {return props.theme.offsetFont;}
    else if (props.secondary) {return props.theme[props.color || 'primary'];}
    return props.theme.primaryFont;
  }};

  margin: 1rem 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  letter-spacing: 0.0625rem;
  outline: none;
  border: none;
  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-weight: 200;
  width: ${props => props.width}px;
  max-width: 100%;
  position: relative;
  text-align: ${props => (props.reversed ? 'right' : 'left')};
  transition: 0.5s ease all;

  box-shadow: ${props =>
    props.disabled
      ? undefined
      : '0 1px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.04)'};

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
    display: ${props => (props.reversed ? undefined : 'none')};
    left: 24px;
  }

  &:hover::before {
    left: ${props => (props.disabled ? undefined : '16px')};
  }

  &::after {
    display: ${props => (props.reversed ? 'none' : undefined)};
    right: 24px;
  }

  &:hover::after {
    right: ${props => (props.disabled ? undefined : '16px')};
  }

  &:hover {
    color: ${props =>
    props.ternary ? props.theme[props.color || 'primary'] : undefined};
    box-shadow: ${props =>
    props.disabled
      ? undefined
      : '0 5px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.10)'};
  }
`;

export const Button = props => <ButtonDiv {...props}>{props.label}</ButtonDiv>;

export default Button;

