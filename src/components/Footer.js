import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../util/utilities';
import { vibrate } from '../util/keyframes';
import { Button } from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <FooterStyled>
      {pathname === '/' ? (
        <></>
      ) : (
        <a
          href="https://github.com/sasha-valderrama/generate-your-cv"
          rel="noreferrer"
          target="_blank"
        >
          <Button primary>Source Code</Button>
        </a>
      )}
      <a
        href="https://github.com/sasha-valderrama"
        target="_blank"
        rel="noreferrer"
      >
        <FooterTitle>🍵 Make by Sasha Valderrama 👩🏽‍💻</FooterTitle>
      </a>
      {pathname === '/' ? (
        <></>
      ) : (
        <Link to="/">
          <Button>Reset</Button>
        </Link>
      )}
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  position: relative;
  z-index: 999;
  bottom: 0;
  width: 100vw;
  height: 6rem;
  ${centerContent};
  background-color: ${(props) => props.theme.colors.quaternary};
  border-top: 4px solid ${(props) => props.theme.colors.black};
`;

const FooterTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.accentSecond};
  text-shadow: 2px 2px 0 ${(props) => props.theme.colors.black};
  font-weight: bold;
  padding:2rem 3rem;
  &:hover {
    color: ${(props) => props.theme.colors.neutral};
    background-color: ${(props) => props.theme.colors.primary});
    animation: ${vibrate} 0.3s linear infinite both;
    cursor: pointer;
}   
`;
