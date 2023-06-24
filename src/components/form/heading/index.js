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
      <ProfilePic src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"></ProfilePic>
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
