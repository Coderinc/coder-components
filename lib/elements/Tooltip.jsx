import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const topPosition = `
  top: -0.375rem;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const rightPosition = `
  right: -0.375rem;
  top: 50%;
  transform: translate(100%, -50%);
`;

const bottomPosition = `
  bottom: -0.375rem;
  left: 50%;
  transform: translate(-50%, 100%);
`;

const leftPosition = `
  left: -0.375rem;
  top: 50%;
  transform: translate(-100%, -50%);
`;

const TooltipWrapper = styled.div`
  position: relative;
  max-height: 100%;
  max-width: 100%;
`;

const TooltipArrow = styled.div`
  ${({ top, right, left }) => {
    if (top) return topPosition;
    if (right) return rightPosition;
    if (left) return leftPosition;
    return bottomPosition;
  }};

  position: absolute;
  width: 0;
  height: 0;

  z-index: -1;
  opacity: 0;

  transition: 0.125s all;
  transition-delay: 0.1s;

  ${TooltipWrapper}:hover & {
    opacity: 1;
    z-index: 5;
  }
`;

const TooltipArrowUp = TooltipArrow.extend`
  bottom: 0;
  border-left: 0.375rem solid transparent;
  border-right: 0.375rem solid transparent;
  border-bottom: 0.375rem solid ${({ theme }) => theme.activeBackground};
`;

const TooltipArrowLeft = TooltipArrow.extend`
  right: 0;
  border-top: 0.375rem solid transparent;
  border-bottom: 0.375rem solid transparent;
  border-right: 0.375rem solid ${({ theme }) => theme.activeBackground};
`;

const TooltipArrowDown = TooltipArrow.extend`
  top: 0;
  border-left: 0.375rem solid transparent;
  border-right: 0.375rem solid transparent;
  border-top: 0.375rem solid ${({ theme }) => theme.activeBackground};
`;

const TooltipArrowRight = TooltipArrow.extend`
  left: 0;
  border-top: 0.375rem solid transparent;
  border-bottom: 0.375rem solid transparent;
  border-left: 0.375rem solid ${({ theme }) => theme.activeBackground};
`;

const TooltipLabel = styled.div`
  ${({ top, right, left }) => {
    if (top) return topPosition;
    if (right) return rightPosition;
    if (left) return leftPosition;
    return bottomPosition;
  }};

  position: absolute;
  padding: 0.375rem;
  border-radius: 0.125rem;

  font-size: 0.75rem;
  line-height: 0.75rem;
  text-align: center;
  white-space: nowrap;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.04);

  color: ${({ theme }) => theme.primaryFont};
  background-color: ${({ theme }) => theme.activeBackground};
  z-index: -1;
  opacity: 0;

  transition: 0.125s all;
  transition-delay: 0.1s;

  ${TooltipWrapper}:hover & {
    opacity: 1;
    z-index: 5;
  }
`;

const arrow = ({ top, left, right }) => {
  if (top) return <TooltipArrowDown top />;
  if (left) return <TooltipArrowRight left />;
  if (right) return <TooltipArrowLeft right />;
  return <TooltipArrowUp />;
};

arrow.propTypes = {
  top: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

arrow.defaultProps = {
  top: false,
  left: false,
  right: false,
};

const Tooltip = ({ label, children, top, left, right, ...props }) => (
  <TooltipWrapper {...props}>
    <TooltipLabel top={top} left={left} right={right}>
      {label}
    </TooltipLabel>
    {arrow({ top, left, right })}
    {children}
  </TooltipWrapper>
);

Tooltip.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.element,
};

Tooltip.defaultProps = {
  top: false,
  right: false,
  left: false,
  children: null,
  label: 'Tooltip',
};

export default Tooltip;
