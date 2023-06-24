import React from 'react';
import { HeadingContainer } from './HeadingContainer';
import { ProfileContainer } from './ProfileContainer';
import { UserName } from './UserName';
import { UserPosition } from './UserPosition';
import { ContactInfo } from './ContactInfo';
import { ContactItem } from './ContactItem';
import { ProfilePic } from './ProfilePic';

export default function Heading({ firstName, lastName, jobPosition }) {
  return (
    <HeadingContainer>
      <ProfilePic></ProfilePic>
      <ProfileContainer>
        <UserName>{firstName}</UserName>
        <UserName>
          <strong>{lastName}</strong>
        </UserName>
        <UserPosition>{jobPosition}</UserPosition>
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
