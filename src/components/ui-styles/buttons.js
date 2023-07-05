import styled from '@emotion/styled';
import {
  centerContent,
  defaultButton,
  standardBorderRadius,
} from './utilities';
import { wobble, colorChange } from './keyframes';

export const PrimaryButton = styled(defaultButton)`
  width: 150px;
  padding: 0.8em 1.2em;
  font-size: ${(props) => props.theme.fontSize.secondary};
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
}
  }
 }
`;

export const SecondaryButton = styled(defaultButton)`
  position: sticky;
  top: 10rem;
  ${standardBorderRadius};
  ${centerContent};
  width: 3rem;
  height: fit-content;
  padding: 0.8rem 0.2rem;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.neutral};
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: ${(props) => props.theme.fontSize.sm};
  &:hover,
  &:focus {
    font-size: ${(props) => props.theme.fontSize.lg};
    transition: font-size 200ms ease-out;
    box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.black}`};
    animation: ${colorChange} 600ms linear infinite alternate both;
  }
`;

export const EditorButton = styled(defaultButton)`
  border: none;
  font-size: ${(props) =>
    props.add ? props.theme.fontSize.lg : props.theme.fontSize.sm};
  background: inherit;
  color: ${(props) => props.theme.colors.black};

  &:hover,
  &:focus {
    transition: font-size 200ms ease-out;
    font-size: ${(props) =>
      props.add ? props.theme.fontSize.xl : props.theme.fontSize.lg};
    color: ${(props) =>
      props.add ? props.theme.colors.secondary : props.theme.colors.tertiary};
  }
`;
