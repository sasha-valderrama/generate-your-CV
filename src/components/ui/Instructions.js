import styled from '@emotion/styled';
import React from 'react';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
  wave,
} from '../../util/utilities';
import { Button } from './Button';
import { listOfInstructions } from '../../data';

export default function Instructions() {
  return (
    <MessageWrapper>
      <MessageTitle>
        Hello there! <Emoji>👋🏽</Emoji>
      </MessageTitle>
      <WelcomeMessage>
        {listOfInstructions.map((item) => {
          return <ListItem key={item.id}>{item.instruction}</ListItem>;
        })}
      </WelcomeMessage>
      <Button>Let's get started</Button>
    </MessageWrapper>
  );
}

const MessageWrapper = styled.div`
  ${standardBorder};
  ${standardBorderRadius};
  ${centerContent};
  width: 45rem;
  height: fit-content;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  flex-direction: column;
  padding: 1rem;
`;

const MessageTitle = styled.h2`
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-bottom: 1rem;
  margin-left: 2rem;
  font-weight: bold;
`;

const Emoji = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const WelcomeMessage = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.2;
`;

const ListItem = styled.li`
  list-style: square;
  padding: 0.3rem;
  margin-left: 2rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.tertiary};
  }
`;
