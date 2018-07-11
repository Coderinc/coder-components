import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  background-color: ${({ theme }) => theme.offsetBackground};

  height: 0.75rem;
  width: 100%;

  border-radius: 0.375rem;
`;

const Progress = styled.div`
  background-color: ${({ theme }) => theme.primary};

  height: 100%;
  width: ${({ percent }) => percent || 0}%;

  border-radius: 0.5rem;

  transition: width 0.25s linear;
`;

const ProgressBar = props => (
  <ProgressWrapper>
    <Progress {...props} />
  </ProgressWrapper>
);

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;
