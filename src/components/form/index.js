import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { NewValues } from '../../data';
import { reducer } from '../../util/reducer';
import About from './section/About';
import Section, { SectionListItem } from './section/Section';
import { BodyWrapper } from './body/BodyWrapper';

export default function Form() {
  const [{ profile, about, experience }, dispatch] = useReducer(
    reducer,
    NewValues
  );

  const handleChangeProfile = (e) => {
    console.log(profile);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
    });
    console.log(profile);
  };

  const testing = ['abc', 'dfsdfdsf', 'dfsdfsf'];
  const testingEducation = [
    'abc',
    'dfe4sdfdsf',
    'abc',
    'dfsdf7dsf',
    'abc',
    'dfsd8fdsf',
    'dfsdfs8f',
  ];
  const testingSkills = ['Office', 'fvkfmkvmf', 'dfsdfsf', 'dfsdfsf'];
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
        <About about={about}></About>
        <BodyWrapper>
          <Section subtitle="Experience">
            {testing.map((item) => {
              return <SectionListItem key={item}>{item}</SectionListItem>;
            })}
          </Section>
          <Section right subtitle="Education">
            {testingEducation.map((item) => {
              return <SectionListItem key={item}>{item}</SectionListItem>;
            })}
          </Section>
          <Section subtitle="Languages">
            {testingLanguage.map((item) => {
              return <SectionListItem key={item}>{item}</SectionListItem>;
            })}
          </Section>
          <Section right subtitle="Skills">
            {testingSkills.map((item) => {
              return <SectionListItem key={item}>{item}</SectionListItem>;
            })}
          </Section>
        </BodyWrapper>
      </MainForm>
    </OuterContainer>
  );
}
