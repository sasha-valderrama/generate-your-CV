import React, { useReducer } from 'react';
import { OuterContainer } from './OuterContainer';
import { MainForm } from './MainForm';
import Heading from './heading';
import { initialState } from '../../data';
import { reducer } from '../../util/reducer';
import About from './sections/About';
import Section, { SectionListItem } from './sections/Section';
import { BodyWrapper } from './body/BodyWrapper';
import { nanoid } from 'nanoid';
import Language from './sections/Language';
import Skill from './sections/Skills';
import Experience from './sections/Experience';

export default function Form() {
  const [{ profile, about, experiences, languages, skills }, dispatch] =
    useReducer(reducer, initialState);

  const handleChangeProfile = (e) => {
    // console.log(profile);
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
      profile: profile,
    });
    // console.log(profile);
  };
  // console.log(profile);
  const handleChangeAbout = (e) => {
    dispatch({
      type: 'UPDATE_ABOUT',
      payload: { key: 'description', value: e.target.value },
      about: about,
    });
    // console.log(about);
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

  
  // const testingEducation = ['abc', 'dfe', 'etg', 'tzt'];
  // console.log(profile);     //Updates!!!
  // console.log(about);       //Updates!!!
  // console.log(experiences); //
  // console.log(education);   //
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
          <Section subtitle="Experience"></Section>
          {experiences.map((experience) => {
            return (
              <Experience
                key={experience.id}
                experience={experience}
                onChangeExperiences={handleChangeExperiences}
              />
            );
          })}
          {/* <Section right subtitle="Education">
            {testingEducation.map((item) => {
              return <SectionListItem key={nanoid()}>{item}</SectionListItem>;
            })}
          </Section> handleChangeExperience*/}
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
