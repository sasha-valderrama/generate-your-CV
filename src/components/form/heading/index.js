import React from 'react';
import { HeadingContainer } from './HeadingContainer';
import { ProfileContainer } from './ProfileContainer';
import { UserName } from './UserName';
import { UserPosition } from './UserPosition';
import { ContactInfo } from './ContactInfo';
import { ContactItem } from './ContactItem';
import { ProfilePic } from './ProfilePic';

export default function Heading() {
  return (
    <HeadingContainer>
      <ProfilePic></ProfilePic>
      <ProfileContainer>
        <UserName>John</UserName>
        <UserName>
          <strong>Doh</strong>
        </UserName>
        <UserPosition>dfsdfsdfsd</UserPosition>
      </ProfileContainer>
      <ContactInfo>
        <ContactItem>city, state</ContactItem>
        <ContactItem>city, state</ContactItem>
        <ContactItem>city, state</ContactItem>
        <ContactItem>city, state</ContactItem>
      </ContactInfo>
    </HeadingContainer>
  );
}
