import React from 'react';
import renderer from 'react-test-renderer';
import DarkThemeProvider from '../elements/DarkThemeProvider';

describe('DarkThemeProvider', () => {
  it('renders correctly', () => {
    const component = renderer.create(<DarkThemeProvider />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
