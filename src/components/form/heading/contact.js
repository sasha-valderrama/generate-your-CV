import styled from '@emotion/styled';
import {
  centerContent,
  flexColumn,
  standardBorderRadius,
  thinBorder,
} from '../../../util/utilities';

export const ContactContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0.5rem;
  right: -2.1rem;
  ${centerContent};
  ${standardBorderRadius};
  ${thinBorder};
  ${flexColumn};
  width: 16rem;
  height: 8rem;
  margin-top: 1rem;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
`;

export const ContactWrapper = styled.div`
  ${centerContent};
  gap: 0.6rem;
`;

export const ContactItem = styled.input`
  width: 190px;
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
`;
