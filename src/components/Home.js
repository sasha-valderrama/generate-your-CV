import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../util/utilities';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <HomeStyled>
      <Outlet />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  ${centerContent};
  // position: relative;
  // z-index: 999;
  // top: 0;
  padding-top: 5rem;
  padding-bottom: 4rem;
  min-height: calc(100vh - 8rem);
  display: flex;
  align-items: flex-start;
`;
