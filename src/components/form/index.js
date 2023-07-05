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
import { flexColumn, standardBorderRadius } from '../ui/styles/utilities';

export default function Form({
  cv,
  onChangeProfile,
  onChangeAbout,
  onChangeExperiences,
  onChangeEducation,
  onChangeLanguages,
  onChangeSkills,
  onAddExperience,
  onAddEducation,
  onAddLanguage,
  onAddSkill,
  onRemoveLanguage,
  onRemoveSkill,
}) {
  const { profile, about, experiences, education, languages, skills } = cv;

  return (
    <OuterContainer>
      <MainForm>
        <Heading
          firstName={profile.firstName}
          lastName={profile.lastName}
          jobPosition={profile.jobPosition}
          phone={profile.phone}
          email={profile.email}
          address={profile.address}
          url={profile.url}
          onChangeProfile={onChangeProfile}
        ></Heading>
        <About about={about.description} onChangeAbout={onChangeAbout}></About>
        <BodyWrapper>
          <Section
            subtitle="Experience"
            section="experience"
            onAddItem={onAddExperience}
          >
            {experiences.map((experience) => {
              return (
                <Experience
                  key={experience.id}
                  experience={experience}
                  section="experiences"
                  onChangeExperiences={onChangeExperiences}
                  // onRemoveItem={onRemoveItem}
                />
              );
            })}
          </Section>
          <Section
            right
            subtitle="Education"
            section="education"
            onAddItem={onAddEducation}
          >
            {education.map((item) => {
              return (
                <EducationItem
                  key={item.id}
                  item={item}
                  section="education"
                  onChangeEducation={onChangeEducation}
                  // onRemoveItem={onRemoveItem}
                />
              );
            })}
          </Section>
          <Section
            subtitle="Languages"
            section="languages"
            onAddItem={onAddLanguage}
          >
            {languages.map((language) => {
              return (
                <Language
                  key={language.id}
                  language={language}
                  section="languages"
                  onChangeLanguages={onChangeLanguages}
                  onRemoveItem={onRemoveLanguage}
                />
              );
            })}
          </Section>
          <Section
            right
            subtitle="Skills"
            section="skills"
            onAddItem={onAddSkill}
          >
            {skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  skill={skill}
                  section="skills"
                  onChangeSkills={onChangeSkills}
                  onRemoveSkill={onRemoveSkill}
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
  ${flexColumn};
  width: 210mm;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

const OuterContainer = styled.div`
  border: 4px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
  padding: 1rem;
`;
