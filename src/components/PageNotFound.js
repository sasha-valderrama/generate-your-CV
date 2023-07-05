import React from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton } from './ui/styles/buttons';
import { MessageTitle, MessageWrapper } from './ui/styles/infoBox';

export default function PageNotFound() {
  return (
    <MessageWrapper>
      <MessageTitle>Error 404: Whoops! Something went wrong...</MessageTitle>
      <MessageTitle>
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </MessageTitle>
      <Link to="/">
        <PrimaryButton>Take Me Home</PrimaryButton>
      </Link>
    </MessageWrapper>
  );
}
