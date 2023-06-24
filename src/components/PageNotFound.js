import React from 'react';
import { MessageBox, MessageTitle } from './ui/MessageBox';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <MessageBox>
      <MessageTitle>Error 404: Whoops! Something went wrong...</MessageTitle>
      <MessageTitle>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </MessageTitle>
      <Link to="/">
        <Button>Take Me Home</Button>
      </Link>
    </MessageBox>
  );
}
