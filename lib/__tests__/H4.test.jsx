import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H4 from '../elements/H4';

describe('H4', () => {
  it('renders correctly', () => {
    const component = renderer.create(<H4>Lorem Ipsum</H4>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('light font', () => {
    const component = renderer.create(<H4 light>Lorem Ipsum</H4>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});