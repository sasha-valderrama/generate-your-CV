import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { newValues } from '../../data';
import { reducer } from '../../util/reducer';
import About from './sections/About';
import Section, { SectionListItem } from './sections/Section';
import { BodyWrapper } from './body/BodyWrapper';
import { nanoid } from 'nanoid';
import Language from '../Language';

export default function Form() {
  const [{ profile, about, languages }, dispatch] = useReducer(
    reducer,
    newValues
  );

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

  const handleChangeLanguages = (id, key, value) => {
    dispatch({
      type: 'UPDATE_LANGUAGES',
      payload: {
        id,
        key,
        value,
      },
    });
    console.log(languages);
  };

  // const testing = ['abc', 'df', 'fsf'];

  // const testingEducation = ['abc', 'dfe', 'etg', 'tzt'];
  // const testingSkills = ['1', '2', '3', '4'];

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
          {/* <Section subtitle="Experience">
            {testing.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section>
          <Section right subtitle="Education">
            {testingEducation.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section> */}
          <Section subtitle="Languages">
            {languages.map((language) => {
              return (
                <Language
                  key={language.id}
                  language={language}
                  onChangeLanguages={handleChangeLanguages}
                />
              );
            })}
          </Section>
          {/* <Section right subtitle="Skills">
            {testingSkills.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section> */}
        </BodyWrapper>
      </MainForm>
    </OuterContainer>
  );
}
