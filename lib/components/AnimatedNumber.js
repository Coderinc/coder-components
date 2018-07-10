import React from 'react';
import raf from 'raf';

class AnimatedNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentNumber: 0,
    };

    this.confirmSixtyFPS = this.confirmSixtyFPS.bind(this);
    this.prepTween = this.prepTween.bind(this);
    this.endTween = this.endTween.bind(this);
    this.tweenValue = this.tweenValue.bind(this);
  }

  componentDidMount() {
    this.prepTween();
  }

  componentDidUpdate(prevProps) {
    if (this.state.currentNumber === this.props.number) {return;}
    if (prevProps.number === this.props.number) {return;}
    if (this.tweenHandler) {this.endTween();}

    this.prepTween();
  }

  confirmSixtyFPS(timestamp) {
    const { lastTimestamp } = this.state;
    return !lastTimestamp || timestamp - lastTimestamp > 16;
  }

  prepTween() {
    this.tweenHandler = raf(timestamp => {
      this.tweenValue(timestamp, true);
    });
  }

  endTween() {
    raf.cancel(this.tweenHandler);
  }

  tweenValue(timestamp, start = false) {
    if (!this.confirmSixtyFPS(timestamp)) {
      this.tweenHandler = raf(this.tweenValue);
      return;
    }

    const { number, duration } = this.props;
    const { currentNumber } = this.state;
    const startTime = start ? timestamp : this.state.startTime;
    const fromNumber = start ? currentNumber : this.state.fromNumber;

    let newNumber;
    if (timestamp - startTime >= duration) {
      newNumber = number;
    } else {
      newNumber =
        fromNumber +
        (number - fromNumber) * ((timestamp - startTime) / duration);
    }

    if (newNumber === number) {
      this.endTween();
      this.setState({
        currentNumber: number,
      });
      return;
    }

    this.setState({
      currentNumber: newNumber,
      startTime: startTime || timestamp,
      fromNumber,
      lastTimestamp: timestamp,
    });
    this.tweenHandler = raf(this.tweenValue);
  }

  render() {
    const displayValue = this.props.noDecimal
      ? Math.round(this.state.currentNumber)
      : this.state.currentNumber;

    const C = this.props.component;
    const formattedValue = this.props.format
      ? this.props.format(displayValue)
      : displayValue;

    if (C) {
      return <C>{formattedValue}</C>;
    }

    return <span>{formattedValue}</span>;
  }
}

export default AnimatedNumber;
