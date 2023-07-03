import React from 'react';
import { Link } from 'react-router-dom';
import { NavTitle, NavWrapper } from './ui-styles/navbar';
import { PrimaryButton } from './ui-styles/buttons';

export default function Header() {
  return (
    <NavWrapper header>
      <a
        href="https://github.com/sasha-valderrama/generate-your-cv"
        rel="noreferrer"
        target="_blank"
      >
        <PrimaryButton primary>Source Code</PrimaryButton>
      </a>
      <NavTitle header>Generate your CV</NavTitle>
      <Link to="/">
        <PrimaryButton>Reset</PrimaryButton>
      </Link>
    </NavWrapper>
  );
}
