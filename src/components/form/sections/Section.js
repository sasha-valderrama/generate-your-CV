import styled from '@emotion/styled';
import React from 'react';
import { standardBorder, standardBorderRadius } from '../../../util/utilities';

export default function Section({ subtitle, children }) {
  return (
    <SectionWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <SectionListWrapper>{children}</SectionListWrapper>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  width: 320px;
  height: fit-content;
  padding: 0.5rem;
  margin-bottom: 2rem;
  margin-left: ${(props) => (props.right ? '1rem' : '2rem')};
  margin-right: ${(props) => (props.right ? '1rem' : '2rem')};
  background-color: ${(props) => props.theme.colors.neutralSecond};
  ${standardBorder};
  border-width: 3px;
  ${standardBorderRadius};
  box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.white}`};
`;

const Subtitle = styled.h2`
  ${standardBorder};
  ${standardBorderRadius};
  border-width: 3px;
  padding: 0.8rem 0.5rem;
  width: fit-content;
  text-align: center;
  position: relative;
  right: 1.5rem;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.accentThird};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.lg};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
`;

const SectionListWrapper = styled.ul`
  display: block;
`;

export const SectionListItem = styled.li`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.2;
  margin: 0.6rem;
  margin-left: 1rem;
`;
