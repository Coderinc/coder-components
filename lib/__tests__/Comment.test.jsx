import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Comment from '../components/Comment';

describe('Comment', () => {
  it('renders correctly', () => {
    const user = { firstName: 'Joe', lastName: 'Schmoe' };
    const comment = 'Lorem Ipsum';
    const component = renderer.create(<Comment user={user} comment={comment} createdAt={(new Date(0)).toISOString()} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});