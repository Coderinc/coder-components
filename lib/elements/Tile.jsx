import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TileWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.25rem;
  box-sizing: border-box;
`;

const TileContainer = styled.div`
  background: ${({ active, theme }) => (active ? theme.activeBackground : theme.offsetBackground)};
  color: ${({ theme }) => theme.primaryFont};

  display: flex;
  align-items: center;
  height: 100%;

  box-sizing: border-box;
  border-radius: 0.125rem;
  padding: 1.5rem;

  font-size: 0.75rem;
  font-weight: lighter;
  letter-spacing: 0.0625rem;
  text-transform: ${({ regularCase }) => (regularCase ? undefined : 'capitalize')};

  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

const TileIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    max-height: 1.75rem;
  }
`;

const TextContainer = styled.span`
  flex: 2;
`;

const Tile = ({
  active, onClick, value, icon, label,
}) => (
  <TileWrapper>
    <TileContainer active={active} onClick={onClick ? () => onClick(value) : undefined}>
      {icon && (
        <TileIcon>
          <img alt="Icon" src={icon} />
        </TileIcon>
      )}
      <TextContainer>
        {label}
      </TextContainer>
    </TileContainer>
  </TileWrapper>
);

Tile.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  // eslint-disable-next-line
  value: PropTypes.any,
  icon: PropTypes.string,
  label: PropTypes.string,
};

Tile.defaultProps = {
  active: false,
  onClick: undefined,
  value: null,
  icon: null,
  label: null,
};

export default Tile;
