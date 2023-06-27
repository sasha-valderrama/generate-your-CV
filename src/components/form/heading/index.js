import React from 'react';
import { HeadingContainer } from './HeadingContainer';
import { ProfileContainer } from './ProfileContainer';
import { ProfileInput } from './ProfileInput';
import { ContactContainer } from './ContactContainer';
import { ContactItem, ContactWrapper } from './ContactItem';
import { ProfilePic } from './ProfilePic';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiSpiderWeb } from 'react-icons/gi';

export default function Heading({
  firstName,
  lastName,
  jobPosition,
  phone,
  email,
  address,
  url,
  onChangeProfile,
}) {
  return (
    <HeadingContainer>
      <ProfilePic src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      {/* <ProfilePic
        type="file"
        id="picture"
        name="picture"
        accept="image/png, image/jpeg"
        onChange={(e) => onChangeProfile(e)}
      /> */}
      <ProfileContainer>
        <ProfileInput
          username
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first Name"
          value={firstName}
          onChange={(e) => onChangeProfile(e)}
        />
        <ProfileInput
          username
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last Name"
          value={lastName}
          onChange={(e) => onChangeProfile(e)}
        />
        <ProfileInput
          type="text"
          name="jobPosition"
          id="jobPosition"
          placeholder="Position you applying for"
          value={jobPosition}
          onChange={(e) => onChangeProfile(e)}
        />
      </ProfileContainer>
      <ContactContainer>
        <ContactWrapper>
          <MdPhone />
          <ContactItem
            type="tel"
            name="phone"
            id="phone"
            placeholder="+49 1573 75 133 68"
            value={phone}
            onChange={(e) => onChangeProfile(e)}
          />
        </ContactWrapper>
        <ContactWrapper>
          <MdEmail />
          <ContactItem
            type="email"
            name="email"
            id="email"
            placeholder="profesional_email@gmail.com"
            value={email}
            onChange={(e) => onChangeProfile(e)}
          />
        </ContactWrapper>
        <ContactWrapper>
          <MdOutlineLocationOn />
          <ContactItem
            type="text"
            name="address"
            id="address"
            placeholder="City, Country"
            value={address}
            onChange={(e) => onChangeProfile(e)}
          />
        </ContactWrapper>
        <ContactWrapper>
          <GiSpiderWeb />
          <ContactItem
            type="url"
            name="url"
            id="id"
            placeholder="github.com/sasha-valderrama"
            value={url}
            onChange={(e) => onChangeProfile(e)}
          />
        </ContactWrapper>
      </ContactContainer>
    </HeadingContainer>
  );
}
