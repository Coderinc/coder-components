import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.primaryFont};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'lighter')};
`;

Paragraph.propTypes = {
  bold: PropTypes.bool,
};

Paragraph.defaultProps = {
  bold: false,
};

export default Paragraph;
