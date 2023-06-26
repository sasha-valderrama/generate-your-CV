import styled from '@emotion/styled';
import { centerContent } from '../../../util/utilities';

export const ContactItem = styled.input`
  width: 190px;
  color: ${(props) => props.theme.colors.quaternary};
  font-size: ${(props) => props.theme.fontSize.sm};
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

export const ContactWrapper = styled.div`
  display: flex;
  ${centerContent};
  gap: 0.6rem;
`;
