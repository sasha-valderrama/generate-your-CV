import React from 'react';
import { PrimaryButton } from './styles/buttons';
import { Link, useLocation } from 'react-router-dom';
import { NavTitle, NavWrapper } from './styles/navbar';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <NavWrapper>
      {pathname === '/' ? (
        <></>
      ) : (
        <a
          href="https://github.com/sasha-valderrama/generate-your-cv"
          rel="noreferrer"
          target="_blank"
        >
          <PrimaryButton primary>Source Code</PrimaryButton>
        </a>
      )}
      <a
        href="https://github.com/sasha-valderrama"
        target="_blank"
        rel="noreferrer"
      >
        <NavTitle>🍵 Made by Sasha Valderrama 👩🏽‍💻</NavTitle>
      </a>
      {pathname === '/' ? (
        <></>
      ) : (
        <Link to="/">
          <PrimaryButton>Reset</PrimaryButton>
        </Link>
      )}
    </NavWrapper>
  );
}
