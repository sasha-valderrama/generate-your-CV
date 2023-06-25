import React from 'react';
import { HeadingContainer } from './HeadingContainer';
import { ProfileContainer } from './ProfileContainer';
import { ProfileInput } from './ProfileInput';
import { ContactInfo } from './ContactInfo';
import { ContactItem, ContactWrapper } from './ContactItem';
import { ProfilePic } from './ProfilePic';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiSpiderWeb } from 'react-icons/gi';

export default function Heading({ firstName, lastName, jobPosition }) {
  return (
    <HeadingContainer>
      <ProfilePic src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      <ProfileContainer>
        <ProfileInput
          username
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first Name"
          value={firstName}
        />
        <ProfileInput
          username
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last Name"
          value={lastName}
        />
        <ProfileInput
          type="text"
          name="jobPosition"
          id="jobPosition"
          placeholder="Position you applying for"
          value={jobPosition}
        />
      </ProfileContainer>
      <ContactInfo>
        <ContactWrapper>
          <ContactItem
            type="text"
            name="jobPosition"
            id="jobPosition"
            placeholder="Position you applying for"
            value={jobPosition}
          />
          <MdPhone />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem />
          <MdEmail />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem />
          <MdOutlineLocationOn />
        </ContactWrapper>
        <ContactWrapper>
          <ContactItem />
          <GiSpiderWeb />
        </ContactWrapper>
      </ContactInfo>
    </HeadingContainer>
  );
}
