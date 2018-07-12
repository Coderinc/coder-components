import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H1 from '../elements/H1';

describe('H1', () => {
  it('renders correctly', () => {
    const component = renderer.create(<H1>Lorem Ipsum</H1>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('light font', () => {
    const component = renderer.create(<H1 light>Lorem Ipsum</H1>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});