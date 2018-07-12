import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ProgressBar from '../elements/ProgressBar';

describe('ProgressBar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<ProgressBar percent={50} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
