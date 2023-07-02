import styled from '@emotion/styled';
import React from 'react';
import { standardBorderRadius, thinBorder } from '../../../util/utilities';

export default function Section({ subtitle, children }) {
  return (
    <SectionWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <SectionListItem>{children}</SectionListItem>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  ${thinBorder};
  ${standardBorderRadius};
  box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.white}`};
  width: 320px;
  height: fit-content;
  padding: 0.5rem;
  margin-left: ${(props) => (props.right ? '1rem' : '2rem')};
  margin-right: ${(props) => (props.right ? '1rem' : '2rem')};
  background-color: ${(props) => props.theme.colors.neutralSecond};
`;

const Subtitle = styled.h2`
  position: relative;
  right: 1.5rem;
  width: fit-content;
  ${thinBorder};
  ${standardBorderRadius};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
  padding: 0.8rem 0.5rem;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.accentThird};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;
export const SectionListItem = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.2;
  margin: 0.6rem;
  margin-left: 1rem;
  list-style: none;
`;
