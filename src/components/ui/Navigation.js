import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../../util/utilities';
import { Button } from './Button';

export default function Navigation() {
  return (
    <NavigationStyled>
      <Button primary>Save</Button>
      <Title>Generate your CV</Title>
      <Button>Reset</Button>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.div`
  ${centerContent}
  justify-content: space-around;
  width: 100vw;
  height: 8rem;
  background-color: ${(props) => props.theme.colors.quaternary};
  border-bottom: 4px solid ${(props) => props.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.accentSecond};
  text-shadow: 3px 3px 0 ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.neutral};
    background-color:
      ${(props) => props.theme.colors.primary}); }
`;
