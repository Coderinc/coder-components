import React from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  position: relative;

  width: ${props => {
    if (props.large) {return '2rem';}
    else if (props.small) {return '1rem';}
    return '1.5rem';
  }};
  height: ${props => {
    if (props.large) {return '2rem';}
    else if (props.small) {return '1rem';}
    return '1.5rem';
  }};

  border-radius: 50%;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const AvatarLabel = styled.span`
  position: absolute;
  bottom: -0.25rem;
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 0.25rem;
  border-radius: 0.25rem;

  font-size: 0.625rem;
  line-height: 0.625rem;
  text-align: center;

  color: ${props => props.theme.offsetFont};
  background-color: ${props => props.theme.offsetBackground};
  z-index: -1;
  opacity: 0;

  transition: 0.125s all;
  transition-delay: 0.1s;

  ${AvatarWrapper}:hover & {
    opacity: 1;
    z-index: 5;
  }
`;

export const Avatar = props => (
  <AvatarWrapper
    large={props.large}
    small={props.small}
  >
    <AvatarImage src={props.icon} />
    <AvatarLabel>
      {props.label || `${props.firstName} ${props.lastName}`}
    </AvatarLabel>
  </AvatarWrapper>
);

export default Avatar;
