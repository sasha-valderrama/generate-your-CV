import styled from '@emotion/styled';

const UserName = styled.input`
  margin-top: -1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.quaternary};
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: bold;
  background-color: inherit;
  border: none;
  &::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
`;

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
`;
