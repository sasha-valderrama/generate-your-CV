import React, { useReducer } from 'react';
import Heading from './heading';
import { initialState } from '../../data';
import { reducer } from '../../util/reducer';
import About from './sections/About';
import Section from './sections/Section';
import { BodyWrapper } from './sections/BodyWrapper';
import Language from './sections/Language';
import Skill from './sections/Skills';
import Experience from './sections/Experience';
import EducationItem from './sections/EducationItem';
import styled from '@emotion/styled';
import { standardBorderRadius } from '../../util/utilities';

export default function Form() {
  const [
    { profile, about, experiences, education, languages, skills },
    dispatch,
  ] = useReducer(reducer, initialState);

  const handleChangeProfile = (e) => {
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
  };

  const handleChangeExperiences = (id, key, value) => {
    dispatch({
      type: 'UPDATE_EXPERIENCES',
      payload: {
        id,
        key,
        value,
      },
    });
  };

  const handleChangeEducation = (id, key, value) => {
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: {
        id,
        key,
        value,
      },
    });
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
  };

  const handleChangeSkills = (value, id) => {
    dispatch({
      type: 'UPDATE_SKILLS',
      payload: {
        id,
        key: 'name',
        value: value,
      },
      skills: skills,
    });
  };
  // console.log(profile);     //Updates!!!
  // console.log(about);       //Updates!!!
  // console.log(experiences); //Update!!!
  // console.log(education);   //Update!!!
  // console.log(languages);   //Updates!!!
  // console.log(skills);      // Updates!!!
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
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  experience={experience}
                  onChangeExperiences={handleChangeExperiences}
                />
              );
            })}
          </Section>
          <Section right subtitle="Education">
            {education.map((item) => {
              return (
                <EducationItem
                  key={item.id}
                  item={item}
                  onChangeEducation={handleChangeEducation}
                />
              );
            })}
          </Section>
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
          <Section right subtitle="Skills">
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  skill={skill}
                  onChangeSkills={handleChangeSkills}
                />
              );
            })}
          </Section>
        </BodyWrapper>
      </MainForm>
    </OuterContainer>
  );
}

const MainForm = styled.form`
  // position: relative;
  // z-index: 999;
  display: flex;
  flex-direction: column;
  width: 210mm;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

const OuterContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
  padding: 1rem;
`;
