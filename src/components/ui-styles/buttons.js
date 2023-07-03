import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
} from './utilities';
import { wobble, colorChange } from './keyframes';

export const PrimaryButton = styled.button`
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
    font-family: ${(props) => props.theme.fontFamily.monospace};
    
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

export const SecondaryButton = styled.div`
  position: sticky;
  top: 10rem;
  ${standardBorder};
  ${standardBorderRadius};
  ${centerContent};
  width: 3rem;
  height: fit-content;
  padding: 0.8rem 0.2rem;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.neutral};
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-family: ${(props) => props.theme.fontFamily.monospace};
  &:hover,
  &:focus {
    font-size: ${(props) => props.theme.fontSize.lg};
    transition: font-size 200ms ease-out;
    box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.black}`};
    animation: ${colorChange} 600ms linear infinite alternate both;
    cursor: pointer;
  }
`;
