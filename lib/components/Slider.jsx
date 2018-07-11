import React from 'react';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';
import { withTheme } from 'styled-components';
import 'rc-slider/assets/index.css';

const sliderStyle = theme => ({
  railStyle: {
    backgroundColor: theme.primary,
  },
  dotStyle: {
    display: 'none',
  },
  activeDotStyle: {
    backgroundColor: theme.primary,
    borderColor: theme.primaryBackground,
    borderWidth: 2,
  },
  trackStyle: [
    {
      backgroundColor: theme.primary,
    },
  ],
  handleStyle: [
    {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground,
    },
    {
      backgroundColor: theme.primary,
      borderColor: theme.primaryBackground,
    },
  ],
});

const markStyle = (theme, index, active) => {
  if (index !== 0 && index !== 10 && !active) {
    return { display: 'none' };
  }
  return {
    color: active ? theme.primaryFont : theme.offsetFont,
  };
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

    const { minValue = 0, maxValue = 10 } = props;
    this.marks = {};
    const delta = Math.round((maxValue - minValue) / 10);
    for (let i = 0; i < 11; i += 1) {
      const val = minValue + i * delta;
      this.marks[val] = {
        label: `${val}`,
        style: markStyle(props.theme, i, false),
      };
    }
  }

  render() {
    const {
      minValue = 0, maxValue = 10, input = { value: 5 }, theme,
    } = this.props;

    const marks = {};
    Object.keys(this.marks).forEach((k, i) => {
      marks[k] = {
        ...this.marks[k],
        style: markStyle(theme, i, input.value === +k),
      };
    });

    return (
      <RCSlider
        defaultValue={input.value || minValue}
        marks={marks}
        max={maxValue}
        min={minValue}
        onChange={input.onChange}
        step={null}
        style={{ margin: '1rem 0' }}
        value={input.value}
        {...sliderStyle(theme)}
      />
    );
  }
}

Slider.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  input: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

Slider.defaultProps = {
  minValue: 0,
  maxValue: 10,
};

export default withTheme(Slider);
