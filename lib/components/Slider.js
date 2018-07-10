import React from 'react';
import RCSlider from 'rc-slider';
import { withTheme } from 'styled-components';
import 'rc-slider/assets/index.css';

const rangeSliderStyle = theme => ({
  railStyle: {
    backgroundColor: theme.offsetBackground,
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

class ThemelessRangeSlider extends React.Component {
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
      minValue = 0,
      maxValue = 10,
      input = { value: ['1', '2'] },
      theme,
    } = this.props;

    const marks = {};
    Object.keys(this.marks).forEach((k, i) => {
      marks[k] = {
        ...this.marks[k],
        style: markStyle(theme, i, input.value.includes(+k)),
      };
    });

    return (
      <RCSlider.Range
        style={{ margin: '1rem 0' }}
        min={minValue}
        max={maxValue}
        marks={marks}
        step={null}
        onChange={input.onChange}
        defaultValue={input.value || []}
        value={input.value}
        {...rangeSliderStyle(theme)}
      />
    );
  }
}

class ThemelessSlider extends React.Component {
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
      minValue = 0,
      maxValue = 10,
      input = { value: 5 },
      theme,
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
        style={{ margin: '1rem 0' }}
        min={minValue}
        max={maxValue}
        marks={marks}
        step={null}
        onChange={input.onChange}
        defaultValue={input.value || minValue}
        value={input.value}
        {...sliderStyle(theme)}
      />
    );
  }
}

export const RangeSlider = withTheme(ThemelessRangeSlider);
export const Slider = withTheme(ThemelessSlider);