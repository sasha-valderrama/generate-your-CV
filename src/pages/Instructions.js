import styled from '@emotion/styled';
import React from 'react';
import { wave } from '../util/utilities';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Message, MessageBox, MessageTitle } from '../components/ui/MessageBox';

const listOfInstructions = [
  {
    id: '165',
    instruction:
      'Click on the Edit to start updating your resume and submit them.',
  },
  { id: '198', instruction: 'If you some inspiration click on "EXAMPLE".' },
  {
    id: '168',
    instruction: 'Click on SAVE to download a PDF version of your resume.',
  },
  { id: '256', instruction: 'Click on RESET if you need to start over.' },
];

export default function Instructions() {
  return (
    <MessageBox>
      <MessageTitle>
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
