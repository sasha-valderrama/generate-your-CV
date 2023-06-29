import styled from '@emotion/styled';
import { standardBorder } from '../../util/utilities';
import { wobble } from '../../util/keyframes';

export const Button = styled.button`
${standardBorder};
  width: 150px;
  padding: 0.8em 1.2em;
  font-size: ${(props) => props.theme.fontSize.secondary};
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.neutral};
  background-color: ${(props) => props.theme.colors.quaternary};
  border-radius: ${(props) =>
    props.primary ? '10px 10px 0px 10px' : '10px 10px 10px 0px'};
    
  &:hover, 
  &:focus{
    color: ${(props) =>
      props.primary ? props.theme.colors.tertiary : props.theme.colors.primary};
    background-color: ${(props) =>
      props.primary ? props.theme.colors.accent : props.theme.colors.tertiary};
    box-shadow: ${(props) =>
      props.primary
        ? `5px 5px 0 ${props.theme.colors.secondary}`
        : `-5px 5px 0 ${props.theme.colors.primary}`};
    animation:  ${wobble} 1800ms ease-out;
      cursor: pointer;
}
  }
 }
`;
