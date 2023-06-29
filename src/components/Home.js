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
  position: relative;
  padding-top: 4.5rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - 8rem);
  display: flex;
  align-items: flex-start;
`;
