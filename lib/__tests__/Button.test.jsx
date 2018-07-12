import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';
import Button from '../elements/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets color correctly', () => {
    const component = renderer.create(<Button color="blue" theme={{ blue: '#0000FF' }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('swaps button styles correctly', () => {
    const component = renderer.create(<Button color="blue" secondary theme={{ blue: '#0000FF' }} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fire onClick', () => {
    const onClick = sinon.spy();
    const component = mount(<Button onClick={onClick} />);
    component.find('div').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
});
