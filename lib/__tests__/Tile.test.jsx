import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';
import Tile from '../elements/Tile';

describe('Tile', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Tile label="Test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fires on click', () => {
    const onClick = sinon.spy();
    const component = mount(<Tile onClick={onClick} />);
    component.find('TileContainer').simulate('click');
    expect(onClick.called).toEqual(true);
  });
})