import { keyframes } from '@emotion/react';

//Animista Library  - https://animista.net/
export const wobble = keyframes`
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-15px) rotate(-6deg);
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

//Jake Jarvis - WAving Hand Emoji w/Pure CSS in CodePen //
//https://codepen.io/jakejarvis/pen/pBZWZw
export const wave = keyframes`
0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(16.0deg) } 
   20% { transform: rotate(-10.0deg) }
   30% { transform: rotate(16.0deg) }
   40% { transform: rotate(-8.0deg) }
   50% { transform: rotate(16.0deg) }
   60% { transform: rotate(0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;
