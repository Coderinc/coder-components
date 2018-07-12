import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MultiSelect } from '../components/Select';

const options = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
];

describe('MultiSelect', () => {
  it('renders correctly', () => {
    const component = renderer.create(<MultiSelect options={options} theme={{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});
