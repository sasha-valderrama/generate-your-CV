import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const wobble = keyframes`
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
`;

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
