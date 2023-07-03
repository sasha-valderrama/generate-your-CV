import styled from '@emotion/styled';
import React from 'react';
import { BsDash } from 'react-icons/bs';
import {
  defaultInput,
  defaultTextarea,
  flexColumn,
} from '../../ui-styles/utilities';
import Edit from '../../ui-styles/Editor';

export default function Experience({
  experience,
  onChangeExperiences,
  onAddItem,
  onRemoveItem,
}) {
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
    <ExperienceWrapper>
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
      <Edit
        item={experience}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
      />
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  position: relative;
  ${flexColumn};
  width: fit-content;
  height: fit-content;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 275px;
`;

const YearsWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const ExperienceYear = styled(defaultInput)`
  width: 50px;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  font-family: ${(props) => props.theme.fontFamily.monospace};
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const ExperienceInput = styled(defaultInput)`
  text-transform: ${(props) => (props.right ? 'uppercase' : '')};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;

const ExperienceDescription = styled(defaultTextarea)`
  margin-bottom: 15px;
`;
