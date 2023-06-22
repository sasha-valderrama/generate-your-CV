import styled from '@emotion/styled';

export const Button = styled.button`
  border: none;
  width: 150px;
  padding: 0.8em 1.2em;
  border: none;
  font-size: ${(props) => props.theme.fontSize.secondary};
  border: 4px solid #000;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) =>
    props.primary ? props.theme.colors.tertiary : props.theme.colors.accent};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.accent : props.theme.colors.tertiary};
  border-radius: ${(props) =>
    props.primary ? '100px 25px 100px 25px' : '25px 100px 25px 100px'};
  &:hover {
    box-shadow: 4px 4px 0 ${(props) => props.theme.colors.primary};
  }
`;
