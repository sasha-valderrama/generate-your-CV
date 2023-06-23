import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../util/utilities';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <HomeStyled>
      HomeSTyling
      <Outlet />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  ${centerContent};
  position: relative;
  z-index: -1;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
