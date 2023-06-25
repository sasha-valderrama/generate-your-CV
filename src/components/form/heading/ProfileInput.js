import styled from '@emotion/styled';

export const ProfileInput = styled.input`
  margin-top: -1rem;
  margin-bottom: ${(props) => (props.username ? '1rem' : '')};
  text-transform: uppercase;
  background-color: inherit;
  font-weight: bold;
  border: none;
  width: 100%;
  color: ${(props) =>
    props.username
      ? props.theme.colors.quaternary
      : props.theme.colors.accentSecond};
  font-size: ${(props) =>
    props.username ? props.theme.fontSize.xxl : props.theme.fontSize.xl};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
