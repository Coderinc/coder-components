import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const phases = {
  Develop: {
    background: 'pink',
    color: 'white',
  },
  Measure: {
    background: 'blue',
    color: 'darkGray',
  },
  Design: {
    background: 'yellow',
    color: 'darkGray',
  },
  Summarize: {
    background: 'orange',
    color: 'darkGray',
  },
  Research: {
    background: 'darkBlue',
    color: 'white',
  },
  Execute: {
    background: 'green',
    color: 'darkGray',
  },
  Model: {
    background: 'red',
    color: 'white',
  },
  Test: {
    background: 'purple',
    color: 'white',
  },
  Maintain: {
    background: 'teal',
    color: 'darkGray',
  },
};

const ChipWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 0.125rem;

  font-size: 0.625rem;

  background-color: ${({ label, theme }) => (phases[label] ? theme[phases[label].background] : theme.primary)};
  color: ${({ label, theme }) => (phases[label] ? theme[phases[label].color] : theme.primaryFont)};
`;

const Chip = ({ label, ...props }) => (
  <ChipWrapper {...props} label={label}>
    {label}
  </ChipWrapper>
);

Chip.propTypes = {
  label: PropTypes.string,
};

Chip.defaultProps = {
  label: 'Phase',
};

export default Chip;
