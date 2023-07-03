import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../util/utilities';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { heartbeat } from '../util/keyframes';

export default function Navigation() {
  return (
    <NavigationStyled>
      <a
        href="https://github.com/sasha-valderrama/generate-your-cv"
        rel="noreferrer"
        target="_blank"
      >
        <Button primary>Source Code</Button>
      </a>
      <Title>Generate your CV</Title>
      <Link to="/generate-your-cv">
        <Button>Reset</Button>
      </Link>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.div`
  position: relative;
  ${centerContent}
  justify-content: space-around;
  width: 100vw;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.quaternary};
  border-bottom: 4px solid ${(props) => props.theme.colors.black};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.accentSecond};
  text-shadow: 2px 2px 0 ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.title};
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.neutral};
    background-color:
      ${(props) => props.theme.colors.primary}); 
      animation:  ${heartbeat} 1.5s ease-in-out infinite both;
`;
