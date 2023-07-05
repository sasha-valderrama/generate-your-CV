import React from 'react';
import styled from '@emotion/styled';
import { BsDash } from 'react-icons/bs';
import { defaultInput, flexColumn } from '../../ui/styles/utilities';
import RemoveEditor from '../../ui/RemoveEditor';

export default function EducationItem({
  item,
  onChangeEducation,
  onRemoveEducation,
}) {
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
    <EducationWrapper>
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
      <EducationInputWrapper>
        <div
          style={{
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            fontSize: '13px',
          }}
        >
          Degree:{' '}
        </div>
        <EducationInput
          type="text"
          id={`${item.id}-degree`}
          name="degree"
          value={item.degree}
          onChange={(e) => handleDegreeChange(e)}
          placeholder="Degree"
        />
      </EducationInputWrapper>
      <EducationInputWrapper>
        <div
          style={{
            fontFamily: 'monospace',
            textTransform: 'uppercase',
            fontSize: '13px',
          }}
        >
          Subject:{' '}
        </div>
        <EducationInput
          type="text"
          id={`${item.id}-subject`}
          name="subject"
          value={item.subject}
          onChange={(e) => handleSubjectChange(e)}
          placeholder="Subject"
        />
      </EducationInputWrapper>
      <RemoveEditor item={item} onRemoveItem={onRemoveEducation} />
    </EducationWrapper>
  );
}

const EducationWrapper = styled.div`
  position: relative;
  ${flexColumn};
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  margin-bottom: 2rem;
`;

const YearsWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const EducationYear = styled(defaultInput)`
  width: 50px;
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;

const EducationInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: -0.5rem;
`;

const EducationInput = styled(defaultInput)`
  font-family: inherit;
  width: ${(props) => (props.university ? '270px' : '100%')};
  text-transform: ${(props) => (props.right ? 'uppercase' : '')};
  font-weight: ${(props) => (props.right ? 'bold' : '')};
  font-size: ${(props) => props.theme.fontSize.sm};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`;
