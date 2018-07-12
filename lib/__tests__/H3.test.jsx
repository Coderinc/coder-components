import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H3 from '../elements/H3';

describe('H3', () => {
  it('renders correctly', () => {
    const component = renderer.create(<H3>Lorem Ipsum</H3>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('light font', () => {
    const component = renderer.create(<H3 light>Lorem Ipsum</H3>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});