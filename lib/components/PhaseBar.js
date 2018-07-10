import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Chip from '../elements/Chip';

const BarContainer = styled.div`
  background-color: ${props =>
    props.active
      ? props.theme.activeBackground
      : props.theme.primaryBackground};
  color: ${props => props.theme.primaryFont};

  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &::before {
    font-size: 1.5rem;
    font-family: coder-icons;
    font-weight: normal;
    content: '\f108';
    margin-right: 0.5rem;
  }
`;

const Fill = styled.div`
  flex: 1;
`;

export const PhaseBar = ({ label, phase, ...props }) => (
  <BarContainer {...props}>
    <Paragraph>{label}</Paragraph>
    <Fill />
    <Chip label={phase} />
  </BarContainer>
);

export default PhaseBar;
