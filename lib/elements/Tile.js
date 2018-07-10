import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.25rem;
  box-sizing: border-box;
`;

const TileContainer = styled.div`
  background: ${props =>
    props.active ? props.theme.activeBackground : props.theme.offsetBackground};
  color: ${props => props.theme.primaryFont};

  display: flex;
  align-items: center;
  height: 100%;

  box-sizing: border-box;
  border-radius: 0.125rem;
  padding: 1.5rem;

  font-size: 0.75rem;
  font-weight: lighter;
  letter-spacing: 0.0625rem;
  text-transform: ${props => (props.regularCase ? undefined : 'capitalize')};

  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
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

export const Tile = props => (
  <TileWrapper>
    <TileContainer
      active={props.active}
      onClick={props.onClick ? () => props.onClick(props.value) : undefined}
    >
      {props.icon && (
        <TileIcon>
          <img src={props.icon} alt="Icon" />
        </TileIcon>
      )}
      <TextContainer>{props.label}</TextContainer>
    </TileContainer>
  </TileWrapper>
);

export default Tile;
