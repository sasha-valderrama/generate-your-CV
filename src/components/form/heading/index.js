import React from 'react';
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { GiSpiderWeb } from 'react-icons/gi';
import { ContactContainer, ContactItem, ContactWrapper } from './contact';
import {
  HeadingContainer,
  ProfileContainer,
  ProfileInput,
} from './profile';

export default function Heading({
  firstName,
  lastName,
  jobPosition,
  phone,
  email,
  address,
  url,
  onChangeProfile,
  onChangeImage,
  picture,
}) {
  return (
    <HeadingContainer>
      <ProfileContainer>
        <ProfileInput
          username
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first Name"
          maxLength="12"
          value={firstName}
          onChange={(e) => onChangeProfile(e)}
        />
        <ProfileInput
          username
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last Name"
          maxLength="12"
          value={lastName}
          onChange={(e) => onChangeProfile(e)}
        />
        <ProfileInput
          type="text"
          name="jobPosition"
          id="jobPosition"
          placeholder="Position you applying for"
          maxLength="27"
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
            maxLength="30"
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
            maxLength="30"
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
            maxLength="30"
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
            maxLength="30"
            value={url}
            onChange={(e) => onChangeProfile(e)}
          />
        </ContactWrapper>
      </ContactContainer>
    </HeadingContainer>
  );
}
