import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '../components/Slider';

describe('Slider', () => {
  it('renders correctly', () => {
    const sliderInput = {
      onChange: undefined,
      value: 5,
    };
    const component = renderer.create(<Slider input={sliderInput} theme={{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
