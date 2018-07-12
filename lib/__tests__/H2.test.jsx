import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H2 from '../elements/H2';

describe('H2', () => {
  it('renders correctly', () => {
    const component = renderer.create(<H2>Lorem Ipsum</H2>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('light font', () => {
    const component = renderer.create(<H2 light>Lorem Ipsum</H2>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});