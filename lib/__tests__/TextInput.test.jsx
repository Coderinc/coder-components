import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';
import TextInput from '../elements/TextInput';

describe('TextInput', () => {
  it('input renders correctly', () => {
    const component = renderer.create(<TextInput meta={{}} input={{}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('textarea renders correctly', () => {
    const component = renderer.create(<TextInput meta={{}} input={{}} multiline />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fires change on change', () => {
    const onChange = sinon.spy();
    const component = mount(<TextInput meta={{}} input={{ onChange }} />);
    component.find('input').simulate('change');
    expect(onChange.called).toEqual(true);
  });

  it('fires change on change for textarea', () => {
    const onChange = sinon.spy();
    const component = mount(<TextInput meta={{}} input={{ onChange }} multiline />);
    component.find('textarea').simulate('change');
    expect(onChange.called).toEqual(true);
  });
})