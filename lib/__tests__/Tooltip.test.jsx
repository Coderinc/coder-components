import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Tooltip from '../elements/Tooltip';

describe('Tooltip', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Tooltip label="test" top>
        <div>Test</div>
      </Tooltip>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});