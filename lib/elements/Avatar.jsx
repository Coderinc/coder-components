import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip from './Tooltip';

const AvatarWrapper = styled.div`
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

const Avatar = ({
  large, small, icon, label, firstName, lastName, ...props
}) => (
  <AvatarWrapper large={large} small={small} {...props}>
    <Tooltip label={label || `${firstName} ${lastName}`}>
      <AvatarImage src={icon} />
    </Tooltip>
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
