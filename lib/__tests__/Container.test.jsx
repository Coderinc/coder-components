import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Container from '../elements/Container';

describe('Container', () => {
  it('renders correct', () => {
    const component = renderer.create(<Container />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets proper size', () => {
    const component = renderer.create(<Container large />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
