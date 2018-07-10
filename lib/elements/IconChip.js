import React from 'react';
import styled from 'styled-components';

const ChipWrapper = styled.div`
  background-color: ${props => props.theme.activeBackground};
  color: ${props => props.theme.primaryFont};

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

export const IconChip = ({ icon, label, ...props }) => (
  <ChipWrapper {...props}>
    <img
      alt="Icon"
      src={icon}
    />
    {label}
  </ChipWrapper>
);

export default IconChip;
