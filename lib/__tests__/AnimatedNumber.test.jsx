import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import AnimatedNumber from '../components/AnimatedNumber';
import { resolve } from 'url';

describe('AnimatedNumber', () => {
  it('renders correctly', () => {
    const component = renderer.create(<AnimatedNumber number={100} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('starts at 0 and goes to 100', (done) => {
    const component = mount(<AnimatedNumber number={100} duration={250} />);
    let value = component.find('span').text();
    expect(value).toEqual("0");
    (new Promise(resolve => setTimeout(resolve, 500)))
    .then(() => {
      value = component.find('span').text();
      expect(value).toEqual("100");
      done();
    })
  });

  it('changes values', (done) => {
    let value;
    const component = mount(<AnimatedNumber number={100} duration={250} />);
    (new Promise(resolve => setTimeout(resolve, 500)))
    .then(() => {
      value = component.find('span').text();
      expect(value).toEqual("100");
      component.setProps({ number: 1000 });
      expect(value).toEqual("100");
      return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
      value = component.find('span').text();
      expect(value).toEqual("1000");
      done();
    });
  });
});