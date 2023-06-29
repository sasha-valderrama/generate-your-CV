import styled from '@emotion/styled';
import React from 'react';
import { SectionListItem } from './Section';
import { TbPoint } from 'react-icons/tb';

export default function Experience({ experience, onChangeExperiences }) {
  const handleFromChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'from', value);
  };

  const handleToChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'to', value);
  };

  return (
    <SectionListItem>
      <ExperienceWrapper>
        <div>
          <TbPoint />
          <ExperienceItem
            left
            type="text"
            id={`${experience.id}-from`}
            name="from"
            value={experience.from}
            onChange={(e) => handleFromChange(e)}
            placeholder="FROM"
          ></ExperienceItem>
        </div>
        <ExperienceItem
          type="text"
          id={`${experience.id}-to`}
          name="to"
          value={experience.to}
          to={experience.to}
          onChange={(e) => handleToChange(e)}
          placeholder="TO"
        ></ExperienceItem>
      </ExperienceWrapper>
    </SectionListItem>
  );
}

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  gap: 0.3rem;
`;

const ExperienceItem = styled.input`
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
