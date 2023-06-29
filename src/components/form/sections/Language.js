import styled from '@emotion/styled';
import React from 'react';
import { SectionListItem } from './Section';
import { TbPoint } from 'react-icons/tb';

export default function Language({ language, onChangeLanguages }) {
  const handleNameChange = (e) => {
    const { value } = e.target;
    onChangeLanguages(language.id, 'langName', value);
  };

  const handleProficiencyChange = (e) => {
    const { value } = e.target;
    onChangeLanguages(language.id, 'proficiency', value);
  };

  return (
    <SectionListItem>
      <LanguageWrapper>
        <div>
          <TbPoint />
          <LanguageItem
            left
            type="text"
            id={`${language.langName}-name`}
            name={language.langName}
            value={language.langName}
            onChange={(e) => handleNameChange(e)}
            placeholder="Language name"
          ></LanguageItem>
        </div>
        <LanguageItem
          type="text"
          id={`${language.langName}-proficiency`}
          name={language.proficiency}
          value={language.proficiency}
          onChange={(e) => handleProficiencyChange(e)}
          placeholder="Proficiency level"
        ></LanguageItem>
      </LanguageWrapper>
    </SectionListItem>
  );
}

const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const LanguageItem = styled.input`
  border: none;
  background-color: inherit;
  font-size: inherit;
  width: ${(props) => (props.left ? '220px' : '260px')};
  font-weight: ${(props) => (props.left ? 'bold' : 'normal')};
  color: ${(props) => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
