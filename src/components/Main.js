import styled from '@emotion/styled';
import React from 'react';
import { LateralButton } from './ui/LateralButton';
import Form from './form';
import { useReducer } from 'react';
import { reducer } from '../util/reducer';
import { initialState } from '../data';
import { centerContent } from '../util/utilities';

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

  const handleShowTemplate = (e) => {
    dispatch({
      type: 'UPDATE_TEMPLATE',
    });
  };
  const handleShowUpdate = (e) => {
    dispatch({
      type: 'ERASE_ALL',
    });
  };
  return (
    <MainContainer>
      <LateralButton left onClick={(e) => handleShowTemplate(e)}>
        TEMPLATE
      </LateralButton>
      <Form
        cv={cv}
        onChangeProfile={handleChangeProfile}
        onChangeAbout={handleChangeAbout}
        onChangeExperiences={handleChangeExperiences}
        onChangeEducation={handleChangeEducation}
        onChangeLanguages={handleChangeLanguages}
        onChangeSkills={handleChangeSkills}
      />
      <LateralButton right onClick={handleShowUpdate}>
        ERASE ALL
      </LateralButton>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  ${centerContent},
  width: 100vw;
  align-items: flex-start;
  gap: 2rem;
  padding-bottom: 3rem;
  min-height: calc(100vh - 7rem);
`;
