import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../elements/Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Avatar label="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
