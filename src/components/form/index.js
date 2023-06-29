import React from 'react';
import Heading from './heading';
import About from './sections/About';
import Section from './sections/Section';
import { BodyWrapper } from './sections/BodyWrapper';
import Language from './sections/Language';
import Skill from './sections/Skills';
import Experience from './sections/Experience';
import EducationItem from './sections/EducationItem';
import styled from '@emotion/styled';
import { standardBorderRadius } from '../../util/utilities';

export default function Form({
  cv,
  onChangeProfile,
  onChangeAbout,
  onChangeExperiences,
  onChangeEducation,
  onChangeLanguages,
  onChangeSkills,
}) {
  const { profile, about, experiences, education, languages, skills } = cv;
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
          onChangeProfile={onChangeProfile}
        ></Heading>
        <About about={about.description} onChangeAbout={onChangeAbout}></About>
        <BodyWrapper>
          <Section subtitle="Experience">
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  experience={experience}
                  onChangeExperiences={onChangeExperiences}
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
                  onChangeEducation={onChangeEducation}
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
                  onChangeLanguages={onChangeLanguages}
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
                  onChangeSkills={onChangeSkills}
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
