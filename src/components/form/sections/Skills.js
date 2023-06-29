import styled from '@emotion/styled';
import React from 'react';
import { SectionListItem } from './Section';
import { TbPoint } from 'react-icons/tb';

export default function Skill({ skill, onChangeSkills }) {
  return (
    <SectionListItem>
      <SkillsWrapper>
        <TbPoint />
        <SkillItem
          type="text"
          id={skill.id}
          name={skill.name}
          value={skill.name}
          onChange={(e) => onChangeSkills(e.target.value, skill.id)}
          placeholder="Enter either a Hard or Soft skill"
        ></SkillItem>
      </SkillsWrapper>
    </SectionListItem>
  );
}

const SkillsWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const SkillItem = styled.input`
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
