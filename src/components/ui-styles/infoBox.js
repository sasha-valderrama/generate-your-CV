import styled from '@emotion/styled';
import {
  centerContent,
  flexColumn,
  standardBorder,
  standardBorderRadius,
} from './utilities';

export const MessageWrapper = styled.div`
  ${standardBorder};
  ${standardBorderRadius};
  ${centerContent};
  ${flexColumn};
  width: 45rem;
  height: fit-content;
  gap: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.accent};
`;

export const MessageTitle = styled.h2`
  align-self: flex-start;
  font-size: ${(props) =>
    props.big ? props.theme.fontSize.xxl : props.theme.fontSize.lg};
  margin-left: 2rem;
  font-weight: bold;
   &:hover {
    color: ${(props) => props.theme.colors.tertiary};
`;

export const MessageFootnote = styled.p`
  align-self: flex-end;
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-left: 2rem;
  font-weight: bold;
   &:hover {
    color: ${(props) => props.theme.colors.tertiary};
`;

export const Message = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: 1.2;
`;
