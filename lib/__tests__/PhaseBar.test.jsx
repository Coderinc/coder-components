import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';
import PhaseBar from '../components/PhaseBar';

describe('PhaseBar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<PhaseBar label="Lorem Ipsum" phase="Design" />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fires on click', () => {
    const onClick = sinon.spy();
    const component = mount(<PhaseBar label="Lorem" phase="T" value={1} onClick={onClick} />);
    component.find('BarContainer').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
})