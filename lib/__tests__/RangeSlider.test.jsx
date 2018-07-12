import React from 'react';
import renderer from 'react-test-renderer';
import RangeSlider from '../components/RangeSlider';

describe('RangeSlider', () => {
  it('renders correctly', () => {
    const rangeSliderInput = {
      onChange: undefined,
      value: [0, 5],
    };
    const component = renderer.create(<RangeSlider input={rangeSliderInput} theme={{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
