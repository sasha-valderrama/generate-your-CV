import styled from '@emotion/styled';
import React from 'react';
import { standardBorderRadius, thinBorder } from '../../../util/utilities';
import { defaultTextarea } from '../../../util/utilities';

export default function About({ about, onChangeAbout }) {
  return (
    <AboutWrapper
      rows="3"
      wrap="hard"
      // maxLength="200"
      onChange={(e) => onChangeAbout(e)}
      name="about"
      id="about"
      value={about}
      placeholder="Write a short description about yourself..."
    />
  );
}

const AboutWrapper = styled(defaultTextarea)`
  position: relative;
  width: 75%;
  min-height: 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.8rem;
  padding: 0.8rem 1rem;
  ${thinBorder};
  ${standardBorderRadius};
  box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.white}`};
  background-color: ${(props) => props.theme.colors.neutralSecond};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.5;
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;
