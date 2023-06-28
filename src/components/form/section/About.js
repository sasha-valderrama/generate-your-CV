import styled from '@emotion/styled';
import React from 'react';
import { standardBorderRadius } from '../../../util/utilities';

export default function About({ about }) {
  return (
    <AboutWrapper rows="3" wrap="hard" maxLength="175">
      {about}
    </AboutWrapper>
  );
}

const AboutWrapper = styled.textarea`
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
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.md};
  ${standardBorderRadius};
  box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.white}`};
  resize: none;
`;
