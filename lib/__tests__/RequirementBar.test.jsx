import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'jest-styled-components';
import RequirementBar from '../components/RequirementBar';

describe('RequirementBar', () => {
  it('renders correctly', () => {
    const component = renderer.create(<RequirementBar label="Lorem Ipsum" phases={["Design"]} />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('fires on click', () => {
    const onClick = sinon.spy();
    const component = mount(<RequirementBar label="Lorem" phases={["t"]} value={1} onClick={onClick} />);
    component.find('BarContainer').simulate('click');
    expect(onClick.calledOnce).toEqual(true);
  });
})