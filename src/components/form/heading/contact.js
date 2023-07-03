import styled from '@emotion/styled';
import {
  centerContent,
  flexColumn,
  standardBorderRadius,
  thinBorder,
} from '../../ui-styles/utilities';

export const ContactContainer = styled.div`
  position: absolute;
  z-index: 999;
  bottom: -4rem;
  right: -8rem;
  ${centerContent};
  ${standardBorderRadius};
  ${thinBorder};
  ${flexColumn};
  width: 19rem;
  height: 10rem;
  margin-top: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ContactWrapper = styled.div`
  ${centerContent};
  gap: 0.6rem;
  margin-left: 0.6rem;
`;

export const ContactItem = styled.input`
  width: 240px;
  font-size: ${(props) => props.theme.fontSize.sm};
  background-color: inherit;
  border: none;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.tertiary};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.xs};
  }
  font-family: ${(props) => props.theme.fontFamily.monospace};
`;
