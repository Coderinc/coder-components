import React from 'react';
import renderer from 'react-test-renderer';
import LightThemeProvider from '../elements/LightThemeProvider';

describe('LightThemeProvider', () => {
  it('renders correctly', () => {
    const component = renderer.create(<LightThemeProvider />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
