import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Wrapper from '../elements/Wrapper';

describe('Wrapper', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Wrapper />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});