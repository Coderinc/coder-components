import React from 'react';
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  background-color: ${props => props.theme.offsetBackground};

  height: 0.75rem;
  width: 100%;

  border-radius: 0.375rem;
`;

const Progress = styled.div`
  background-color: ${props => props.theme.primary};

  height: 100%;
  width: ${props => props.percent || 0}%;

  border-radius: 0.5rem;

  transition: width 0.25s linear;
`;

export const ProgressBar = props => (
  <ProgressWrapper>
    <Progress {...props} />
  </ProgressWrapper>
);

export default ProgressBar;
