import styled from '@emotion/styled';
import React from 'react';
import { SwitchView } from './ui/SwitchView';
import Form from './form';
import { useReducer } from 'react';
import { reducer } from '../util/reducer';
import { defaultValues, initialState } from '../data';

export default function Main() {
  const [cv, dispatch] = useReducer(reducer, initialState);

  const handleChangeProfile = (e) => {
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: { key: e.target.name, value: e.target.value },
      profile: cv.profile,
    });
  };

  const handleChangeAbout = (e) => {
    dispatch({
      type: 'UPDATE_ABOUT',
      payload: { key: 'description', value: e.target.value },
      about: cv.about,
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
      skills: cv.skills,
    });
  };
  // console.log(cv.profile);     //Updates!!!
  // console.log(cv.about);       //Updates!!!
  // console.log(cv.experiences); //Update!!!
  // console.log(cv.education);   //Update!!!
  // console.log(cv.languages);   //Updates!!!
  // console.log(cv.skills);      // Updates!!!

  const handleShowExample = (e) => {
    alert('Example was clicked');
  };
  const handleShowUpdate = (e) => {
    alert('Update was clicked');
  };
  return (
    <MainContainer>
      <SwitchView left onClick={(e) => handleShowExample(e)}>
        EXAMPLE
      </SwitchView>
      <Form
        cv={cv}
        onChangeProfile={handleChangeProfile}
        onChangeAbout={handleChangeAbout}
        onChangeExperiences={handleChangeExperiences}
        onChangeEducation={handleChangeEducation}
        onChangeLanguages={handleChangeLanguages}
        onChangeSkills={handleChangeSkills}
      />
      <SwitchView right onClick={handleShowUpdate}>
        UPDATE
      </SwitchView>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
