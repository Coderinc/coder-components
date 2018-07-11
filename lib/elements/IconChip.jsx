import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChipWrapper = styled.div`
  background-color: ${({ theme }) => theme.activeBackground};
  color: ${({ theme }) => theme.primaryFont};

  padding: 0.375rem 0.5rem 0.25rem;
  margin: 0.25rem;
  border-radius: 0.125rem;

  font-size: 0.625rem;
  font-weight: lighter;
  letter-spacing: 0.0625rem;

  display: flex;

  img {
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    margin-right: 0.375rem;
  }
`;

const IconChip = ({ icon, label, ...props }) => (
  <ChipWrapper {...props}>
    {icon && <img alt="Icon" src={icon} />}
    {label}
  </ChipWrapper>
);

IconChip.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};

IconChip.defaultProps = {
  icon: null,
  label: 'Joe Schmoe',
};

export default IconChip;
