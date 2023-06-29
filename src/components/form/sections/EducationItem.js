import React from 'react';
import { SectionListItem } from './Section';
import styled from '@emotion/styled';
import { BsDash } from 'react-icons/bs';

export default function EducationItem({ item, onChangeEducation }) {
  const handleFromChange = (e) => {
    const { value } = e.target;
    onChangeEducation(item.id, 'from', value);
  };

  const handleToChange = (e) => {
    const { value } = e.target;
    onChangeEducation(item.id, 'to', value);
  };

  const handleUniversityChange = (e) => {
    const { value } = e.target;
    onChangeEducation(item.id, 'university', value);
  };
  const handleDegreeChange = (e) => {
    const { value } = e.target;
    onChangeEducation(item.id, 'degree', value);
  };
  const handleSubjectChange = (e) => {
    const { value } = e.target;
    onChangeEducation(item.id, 'subject', value);
  };

  return (
    <SectionListItem>
      <EducationWrapper>
        <HeadingWrapper>
          <YearsWrapper>
            <EducationYear
              left
              type="text"
              id={`${item.id}-from`}
              name="from"
              value={item.from}
              onChange={(e) => handleFromChange(e)}
              placeholder="FROM"
            />
            <BsDash />
            <EducationYear
              type="text"
              id={`${item.id}-to`}
              name="to"
              value={item.to}
              onChange={(e) => handleToChange(e)}
              placeholder="TO"
            />
          </YearsWrapper>
          <EducationInput
            right
            type="text"
            id={`${item.id}-university`}
            name="university"
            value={item.university}
            onChange={(e) => handleUniversityChange(e)}
            placeholder="University"
          />
        </HeadingWrapper>
        <EducationInput
          type="text"
          id={`${item.id}-degree`}
          name="degree"
          value={item.degree}
          onChange={(e) => handleDegreeChange(e)}
          placeholder="Degree"
        />
        <EducationInput
          type="text"
          id={`${item.id}-subject`}
          name="subject"
          value={item.subject}
          onChange={(e) => handleSubjectChange(e)}
          placeholder="Subject"
        />
      </EducationWrapper>
    </SectionListItem>
  );
}

const EducationWrapper = styled.div`
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

const EducationYear = styled.input`
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

const EducationInput = styled.input`
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
