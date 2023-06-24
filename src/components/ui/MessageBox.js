import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
} from '../../util/utilities';

export const MessageBox = styled.div`
  ${standardBorder};
  ${standardBorderRadius};
  ${centerContent};
  width: 45rem;
  height: fit-content;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  flex-direction: column;
  padding: 1rem;
`;

export const MessageTitle = styled.h2`
  align-self: flex-start;
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-bottom: 1rem;
  margin-left: 2rem;
  font-weight: bold;
   &:hover {
    color: ${(props) => props.theme.colors.tertiary};

`;

export const Message = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  line-height: 1.2;
`;
