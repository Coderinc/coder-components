import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  position: relative;

  width: ${({ large, small }) => {
    if (large) {
      return '2rem';
    }
    if (small) {
      return '1rem';
    }
    return '1.5rem';
  }};
  height: ${({ large, small }) => {
    if (large) {
      return '2rem';
    }
    if (small) {
      return '1rem';
    }
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

  color: ${({ theme }) => theme.offsetFont};
  background-color: ${({ theme }) => theme.offsetBackground};
  z-index: -1;
  opacity: 0;

  transition: 0.125s all;
  transition-delay: 0.1s;

  ${AvatarWrapper}:hover & {
    opacity: 1;
    z-index: 5;
  }
`;

const Avatar = ({
  large, small, icon, label, firstName, lastName, ...props
}) => (
  <AvatarWrapper large={large} small={small} {...props}>
    <AvatarImage src={icon} />
    <AvatarLabel>
      {label || `${firstName} ${lastName}`}
    </AvatarLabel>
  </AvatarWrapper>
);

Avatar.propTypes = {
  large: PropTypes.bool,
  small: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

Avatar.defaultProps = {
  large: false,
  small: false,
  label: undefined,
  firstName: 'Joe',
  lastName: 'Schmoe',
};

export default Avatar;
