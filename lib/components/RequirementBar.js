import React from 'react';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Chip from '../elements/Chip';

const BarContainer = styled.div`
  background-color: ${props =>
    props.active ? props.theme.activeBackground : props.theme.offsetBackground};
  color: ${props => props.theme.primaryFont};

  box-sizing: border-box;
  border-radius: 0.125rem;
  padding: 0.5rem;
  margin: 0.25rem 0;
  width: 100%;

  display: flex;

  &::before {
    font-size: 1.5rem;
    font-family: coder-icons;
    font-weight: normal;
    content: '\f108';
    margin-right: 0.5rem;
  }
`;

const BarContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BarTop = styled.div`
  display: flex;
`;

const BarBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  margin: 0 0.25rem;
  &::before {
    font-size: 1.5rem;
    color: ${props => props.theme.offsetFont};
    font-family: coder-icons;
    font-weight: normal;
    content: '${props => props.content}';
  }
`;

const Fill = styled.div`
  flex: 1;
`;

export const RequirementBar = ({ phases = [], label, ...props }) => (
  <BarContainer {...props}>
    <BarContent>
      <BarTop>
        <Paragraph>{label}</Paragraph>
        <Fill />
        <Icon content="\f107" />
        <Icon content="\f11f" />
      </BarTop>
      <BarBottom>{phases.map(p => (<Chip
        key={p}
        label={p}
      />))}</BarBottom>
    </BarContent>
  </BarContainer>
);

export default RequirementBar;
