import React from 'react';
import styled from 'styled-components';

const phases = {
  Develop: {
    "background": "pink",
    "color": "white"
  },
  Measure: {
    "background": "blue",
    "color": "darkGray"
  },
  "Design": {
    "background": "yellow",
    "color": "darkGray"
  },
  "Summarize": {
    "background": "orange",
    "color": "darkGray"
  },
  "Research": {
    "background": "darkBlue",
    "color": "white"
  },
  "Execute": {
    "background": "green",
    "color": "darkGray"
  },
  "Model": {
    "background": "red",
    "color": "white"
  },
  "Test": {
    "background": "purple",
    "color": "white"
  },
  "Maintain": {
    "background": "teal",
    "color": "darkGray"
  }
};


const ChipWrapper = styled.div`
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 0.125rem;

  font-size: 0.625rem;

  background-color: ${props => (phases[props.label] ?
    props.theme[phases[props.label].background] : props.theme.primary)};
  color: ${props => 
    (phases[props.label] ?
      props.theme[phases[props.label].color] : props.theme.primaryFont)};
`;

export const Chip = props => (
  <ChipWrapper {...props}>{props.label}</ChipWrapper>
);

export default Chip;
