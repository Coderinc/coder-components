import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from '../elements/Paragraph';
import Chip from '../elements/Chip';

const BarContainer = styled.div`
  background-color: ${({ active, theme }) => (active ? theme.activeBackground : theme.offsetBackground)};
  color: ${({ theme }) => theme.primaryFont};

  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  margin: 0.25rem 0;
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

const PhaseBar = ({
  label, phase, value, onClick, ...props
}) => (
  <BarContainer {...props} onClick={onClick ? () => onClick(value) : undefined}>
    <Paragraph>
      {label}
    </Paragraph>
    <Fill />
    <Chip label={phase} />
  </BarContainer>
);

PhaseBar.propTypes = {
  label: PropTypes.string.isRequired,
  phase: PropTypes.string.isRequired,
  // eslint-disable-next-line
  value: PropTypes.any,
  onClick: PropTypes.func,
};

PhaseBar.defaultProps = {
  value: 0,
  onClick: undefined,
};

export default PhaseBar;
