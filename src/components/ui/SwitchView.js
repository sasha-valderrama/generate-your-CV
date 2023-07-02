import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
} from '../../util/utilities';

const lateralButton = styled.div`
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
  font-size: ${(props) => props.theme.fontSize.xl};
  font-family: ${(props) => props.theme.fontFamily.monospace};
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accentSecond};
    box-shadow: ${(props) => `5px 5px 0 ${props.theme.colors.black}`};
    cursor: pointer;
  }
`;

export const SwitchView = styled(lateralButton)`
  color: ${(props) => props.theme.colors.black};
  font-family: 'Helvetica';
  font-size: ${(props) => props.theme.fontSize.lg};
  background-color: ${(props) => props.theme.colors.neutral};
`;
