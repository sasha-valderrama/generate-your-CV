import styled from '@emotion/styled';
import {
  centerContent,
  standardBorder,
  standardBorderRadius,
  wobble,
} from '../../util/utilities';

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

  &:hover,&:focus{
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

const lateralButton = styled.div`
  ${standardBorder};
  ${standardBorderRadius};
  width: 3rem;
  height: fit-content;
  padding: 0.8rem 0.2rem;
  position: absolute;
  z-index: 9999;
  right: ${(props) => (props.right ? '6rem' : '')};
  left: ${(props) => (props.right ? '' : '6rem')};
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.neutral};
  // display: flex;
  // ${centerContent};
  writing-mode: vertical-rl;
  text-orientation: upright;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.accentSecond};
  }
`;

export const Edit = styled(lateralButton)`
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.neutral};
`;

export const Example = styled(lateralButton)`
  bottom: 2rem;
  background-color: ${(props) => props.theme.colors.neutral};
`;

export const Preview = styled(lateralButton)`
  bottom: 5rem;
`;
