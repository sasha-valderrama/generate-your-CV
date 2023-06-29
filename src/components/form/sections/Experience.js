import styled from '@emotion/styled';
import React from 'react';
import { SectionListItem } from './Section';
import { BsDash } from 'react-icons/bs';

export default function Experience({ experience, onChangeExperiences }) {
  const handleFromChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'from', value);
  };

  const handleToChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'to', value);
  };

  const handlePositionChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'position', value);
  };
  const handleCompanyChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'company', value);
  };
  const handleLocationChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'location', value);
  };
  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    onChangeExperiences(experience.id, 'description', value);
  };

  return (
    <SectionListItem>
      <ExperienceWrapper>
        <HeadingWrapper>
          <YearsWrapper>
            <ExperienceYear
              left
              type="text"
              id={`${experience.id}-from`}
              name="from"
              value={experience.from}
              onChange={(e) => handleFromChange(e)}
              placeholder="FROM"
            />
            <BsDash />
            <ExperienceYear
              type="text"
              id={`${experience.id}-to`}
              name="to"
              value={experience.to}
              onChange={(e) => handleToChange(e)}
              placeholder="TO"
            />
          </YearsWrapper>
          <ExperienceInput
            right
            type="text"
            id={`${experience.id}-position`}
            name="position"
            value={experience.position}
            onChange={(e) => handlePositionChange(e)}
            placeholder="POSITION"
          />
        </HeadingWrapper>
        <ExperienceInput
          type="text"
          id={`${experience.id}-company`}
          name="company"
          value={experience.company}
          onChange={(e) => handleCompanyChange(e)}
          placeholder="Company"
        />
        <ExperienceInput
          type="text"
          id={`${experience.id}-location`}
          name="location"
          value={experience.location}
          onChange={(e) => handleLocationChange(e)}
          placeholder="Location (City, Country)"
        />
        <ExperienceDescription
          rows="3"
          wrap="hard"
          maxLength="110"
          id={`${experience.id}-description`}
          name="description"
          value={experience.description}
          onChange={(e) => handleDescriptionChange(e)}
          placeholder="A short description of the work you did there."
        />
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
  gap: 0.5rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  // border: 2px solid blue;
  gap: 1.2rem;
  font-weight: bold;
`;

const YearsWrapper = styled.div`
  display: flex;
  // border: 1px solid red;
  width: fit-content;
`;

const ExperienceYear = styled.input`
  font-weight: bold;
  width: 50px;
  background-color: inherit;
  border: none;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const ExperienceInput = styled.input`
  border: none;
  background-color: inherit;
  font-size: inherit;
  width: 100%;
  font-weight: bold;
  text-transform: ${(props) => (props.right ? 'uppercase' : '')};
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

const ExperienceDescription = styled.textarea`
  background-color: inherit;
  resize: none;
  border: none;
  // height: 60px;
  margin-bottom: 15px;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
`;
