import styled from '@emotion/styled';
import React from 'react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';
import { AiFillAlert } from 'react-icons/ai';
import {
  Message,
  MessageBox,
  MessageFootnote,
  MessageTitle,
} from './ui/MessageBox';
import { wave } from '../util/keyframes';
import { nanoid } from 'nanoid';

const listOfInstructions = [
  // {
  //   id: nanoid(),
  //   instruction:
  //     'Click on the Edit to start updating your resume and submit them.',
  // },
  {
    id: nanoid(),
    instruction: 'If you need some inspiration click on SHOW TEMPLATE.',
  },
  {
    id: nanoid(),
    instruction: 'If you want to have a clean start, click on ERASE ALL.',
  },
  {
    id: nanoid(),
    instruction: 'Click on RESET if you need to start all over.',
  },
];

export default function Instructions() {
  return (
    <MessageBox>
      <MessageTitle big>
        Hello there! <WelcomeEmoji>👋🏽</WelcomeEmoji>
      </MessageTitle>
      <Message>
        {listOfInstructions.map((item) => {
          return <ListItem key={item.id}>{item.instruction}</ListItem>;
        })}
      </Message>
      <Link to="/cv-form">
        <Button>Let's get started</Button>
      </Link>
      <MessageFootnote>
        <AiFillAlert />
        Built to be seen on desktop screens.
      </MessageFootnote>
    </MessageBox>
  );
}

const WelcomeEmoji = styled.span`
  animation-name: ${wave};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
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
