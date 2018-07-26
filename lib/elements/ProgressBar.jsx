import React from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressWrapper = styled.div`
  background-color: ${({ theme }) => theme.offsetBackground};

  height: 0.75rem;
  width: 100%;

  border-radius: 0.375rem;
`;

const Progress = styled.div`
  background-color: ${({ theme }) => theme.primary};

  height: 100%;

  border-radius: 0.5rem;
`;

class ProgressBar extends React.Component {
  render() {
    const { percent } = this.props;

    return (
      <ProgressWrapper {...this.props}>
        <Motion style={{ percent: spring(percent) }}>
          {({ percent }) => <Progress style={{ width: `${percent}%` }} />}
        </Motion>
      </ProgressWrapper>
    );
  }
}

// const ProgressBar = ({ percent, ...props }) => (
//   <ProgressWrapper {...props}>
//     <Motion defaultStyle={{ >
//       <Progress percent={percent} />
//     </Motion>
//   </ProgressWrapper>
// );

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;
