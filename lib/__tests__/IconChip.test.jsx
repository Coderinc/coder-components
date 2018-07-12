import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IconChip from '../elements/IconChip';

describe('IconChip', () => {
  it('renders correctly', () => {
    const component = renderer.create(<IconChip label="Test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});