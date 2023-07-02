import styled from '@emotion/styled';
import React from 'react';
import { TbPoint } from 'react-icons/tb';
import { defaultInput } from '../../../util/utilities';

export default function Skill({ skill, onChangeSkills }) {
  return (
    <SkillsWrapper>
      <TbPoint />
      <SkillItem
        type="text"
        id={skill.id}
        name={skill.name}
        value={skill.name}
        onChange={(e) => onChangeSkills(e.target.value, skill.id)}
        placeholder="Enter a Hard or Soft skill"
      ></SkillItem>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const SkillItem = styled(defaultInput)`
  width: ${(props) => (props.left ? '220px' : '260px')};
  font-weight: ${(props) => (props.left ? 'bold' : 'normal')};
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;
