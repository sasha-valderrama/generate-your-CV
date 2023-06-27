import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { initialArg } from '../../data';
import { reducer } from '../../util/reducer';
import About from './About';
import Section, { SectionListItem } from './section/Section';
import { BodyWrapper } from './body/BodyWrapper';

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const handleChangeProfile = (e) => {
    console.log(state);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
    });
    console.log(state);
  };

  const testing = ['abc', 'dfsdfdsf', 'dfsdfsf'];
  const testingEducation = [
    'abc',
    'dfsdfdsf',
    'abc',
    'dfsdfdsf',
    'abc',
    'dfsdfdsf',
    'dfsdfsf',
  ];
  const testingSkills = ['Office', 'fvkfmkvmf', 'dfsdfsf', 'dfsdfsf'];
  const testingLanguage = ['German', 'Spanish', 'English'];

  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={state.firstName}
          lastName={state.lastName}
          jobPosition={state.jobPosition}
          picture={state.picture}
          phone={state.phone}
          email={state.email}
          address={state.address}
          url={state.url}
          onChangeProfile={handleChangeProfile}
        ></Heading>
        <About about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est siAenean et metus."></About>
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
