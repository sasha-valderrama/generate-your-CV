import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { newValues } from '../../data';
import { reducer } from '../../util/reducer';
import About from './section/About';
import Section, { SectionListItem } from './section/Section';
import { BodyWrapper } from './body/BodyWrapper';
import { nanoid } from 'nanoid';

export default function Form() {
  const [{ profile, about }, dispatch] = useReducer(reducer, newValues);

  const handleChangeProfile = (e) => {
    console.log(profile);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
      profile: profile,
    });
  };

  const handleChangeAbout = (e) => {
    dispatch({
      type: 'UPDATE_ABOUT',
      payload: { key: 'description', value: e.target.value },
      about: about,
    });
    console.log(about);
  };

  const testing = ['abc', 'df', 'fsf'];

  const testingEducation = ['abc', 'dfe', 'etg', 'tzt'];
  const testingSkills = ['1', '2', '3', '4'];

  const testingLanguage = ['German', 'Spanish', 'English'];

  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={profile.firstName}
          lastName={profile.lastName}
          jobPosition={profile.jobPosition}
          picture={profile.picture}
          phone={profile.phone}
          email={profile.email}
          address={profile.address}
          url={profile.url}
          onChangeProfile={handleChangeProfile}
        ></Heading>
        <About
          about={about.description}
          onChangeAbout={handleChangeAbout}
        ></About>
        <BodyWrapper>
          <Section subtitle="Experience">
            {testing.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section>
          <Section right subtitle="Education">
            {testingEducation.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section>
          <Section subtitle="Languages">
            {testingLanguage.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section>
          <Section right subtitle="Skills">
            {testingSkills.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section>
        </BodyWrapper>
      </MainForm>
    </OuterContainer>
  );
}
