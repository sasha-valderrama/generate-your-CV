import styled from '@emotion/styled';
import React from 'react';
import { standardBorderRadius } from '../../../util/utilities';
import { defaultTextarea } from '../../../util/utilities';

export default function About({ about, onChangeAbout }) {
  return (
    <AboutWrapper
      rows="3"
      wrap="hard"
      maxLength="175"
      onChange={(e) => onChangeAbout(e)}
      name="about"
      id="about"
      value={about}
      placeholder="Write a short description about yourself..."
    >
      {about}
    </AboutWrapper>
  );
}

const AboutWrapper = styled(defaultTextarea)`
  position: relative;
  display: flex;
  margin-top: 2rem;
  padding: 0.8rem 1rem;
  width: 72%;
  height: fit-content;
  margin-left: auto;
  margin-right: 3rem;
  line-height: 1.5;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.neutralSecond};
  font-size: ${(props) => props.theme.fontSize.md};
  ${standardBorderRadius};
  box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.white}`};
`;
