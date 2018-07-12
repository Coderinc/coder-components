import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Avatar from '../elements/Avatar';
import Paragraph from '../elements/Paragraph';

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 0.375rem;
`;

const Text = Paragraph.extend`
  margin: 0 1rem 0 1rem;
  flex: 1;
`;

const Time = Paragraph.extend`
  color: ${({ theme }) => theme.offsetFont};
  font-size: 0.75rem;
  max-width: 5rem;
  text-align: right;
`;

const Comment = ({ user, comment, createdAt }) => (
  <CommentWrapper>
    <StyledAvatar {...user} large />
    <Text>
      {comment}
    </Text>
    <Time>
      {moment(createdAt).calendar()}
    </Time>
  </CommentWrapper>
);

Comment.propTypes = {
  user: PropTypes.object.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOf([PropTypes.object, PropTypes.string]).isRequired,
};

export default Comment;
