import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
} from '../../util/utilities';
import { colorChange } from '../../util/keyframes';

export const LateralButton = styled.div`
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
