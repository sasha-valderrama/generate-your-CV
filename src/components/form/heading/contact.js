import styled from '@emotion/styled';
import { centerContent, standardBorderRadius } from '../../../util/utilities';

export const ContactContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0.5rem;
  right: -2.1rem;
  width: 16rem;
  height: 8rem;
  margin-top: 1rem;
  ${centerContent};
  gap: 0.5rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
`;

export const ContactWrapper = styled.div`
  display: flex;
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
