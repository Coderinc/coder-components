import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Paragraph from '../elements/Paragraph';

describe('Paragraph', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Paragraph>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('bold font', () => {
    const component = renderer.create(<Paragraph bold>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});