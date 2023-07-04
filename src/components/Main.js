import styled from '@emotion/styled';
import React from 'react';
import Form from './form';
import { useReducer } from 'react';
import { reducer } from '../reducer';
import { initialState } from '../data';
import { centerContent } from './ui-styles/utilities';
import { SecondaryButton } from './ui-styles/buttons';

export default function Main() {
  const [cv, dispatch] = useReducer(reducer, initialState);

  // const handleAddItem = (item, section) => {
  //   dispatch({
  //     type: 'ADD_ITEM',
  //     item,
  //     section,
  //   });
  //   console.log(item);
  // };

  const handleRemoveItem = (itemId, section) => {
    //  dispatch({
    //    type: 'REMOVE_ITEM',
    //    itemId,
    //    section,
    //  });
    console.log(itemId, section);
  };

  const handleAddExperience = (e, section) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EXPERIENCE',
      section,
    });
  };

  const handleAddEducation = (e, section) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_EDUCATION',
      section,
    });
  };

  const handleAddLanguage = (e, section) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_LANGUAGE',
      section,
    });
  };

  const handleAddSkill = (e, section) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_SKILL',
      section,
    });
    console.log(section);
  };

  const handleRemoveSkillItem = (item, section) => {
    console.log(item, item.id, section);
  };

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
      <SecondaryButton left onClick={(e) => handleShowTemplate(e)}>
        TEMPLATE
      </SecondaryButton>
      <Form
        cv={cv}
        onChangeProfile={handleChangeProfile}
        onChangeAbout={handleChangeAbout}
        onChangeExperiences={handleChangeExperiences}
        onChangeEducation={handleChangeEducation}
        onChangeLanguages={handleChangeLanguages}
        onChangeSkills={handleChangeSkills}
        onRemoveItem={handleRemoveItem}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onAddLanguage={handleAddLanguage}
        onAddSkill={handleAddSkill}
        onRemoveSkillItem={handleRemoveSkillItem}
      />
      <SecondaryButton right onClick={handleShowUpdate}>
        ERASE ALL
      </SecondaryButton>
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
