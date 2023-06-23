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
  color: ${(props) => props.theme.colors.neutral};
  background-color: ${(props) => props.theme.colors.quaternary};
  border-radius: ${(props) =>
    props.primary ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
  &:hover {
    color: ${(props) =>
      props.primary ? props.theme.colors.tertiary : props.theme.colors.primary};
    background-color: ${(props) =>
      props.primary ? props.theme.colors.accent : props.theme.colors.tertiary};
    // box-shadow: 5px 5px 0 ${(props) => props.theme.colors.primary};
  }
`;
