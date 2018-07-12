import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Chip from '../elements/Chip';

describe('Chip', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Chip label="Develop" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('chooses correct color', () => {
    const component = renderer.create(<Chip theme={{ primary: '#FF0000' }} label="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
