import styled from '@emotion/styled';
import React from 'react';
import { TbPoint } from 'react-icons/tb';
import { centerContentInColumn, defaultInput } from '../../ui-styles/utilities';

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
  );
}

const LanguageWrapper = styled.div`
  ${centerContentInColumn};
  width: fit-content;
  height: fit-content;
  gap: 0.3rem;
`;

const LanguageItem = styled(defaultInput)`
  width: ${(props) => (props.left ? '220px' : '260px')};
  font-weight: ${(props) => (props.left ? 'bold' : 'normal')};
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;
