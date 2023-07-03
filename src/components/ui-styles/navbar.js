import styled from '@emotion/styled';
import { centerContent } from './utilities';
import { heartbeat } from './keyframes';

export const NavWrapper = styled.div`
  position: relative;
  ${centerContent}
  justify-content: space-around;
  width: 100vw;
  height: ${(props) => (props.header ? '7rem' : '6rem')};
  background-color: ${(props) => props.theme.colors.quaternary};
  border-bottom: ${(props) =>
    props.header ? `4px solid ${props.theme.colors.black}` : ''};
  border-top: ${(props) =>
    props.header ? '' : `4px solid ${props.theme.colors.black}`};
`;

export const NavTitle = styled.h1`
  color: ${(props) => props.theme.colors.accentSecond};
  text-shadow: 2px 2px 0 ${(props) => props.theme.colors.black};
  font-size: ${(props) =>
    props.header ? props.theme.fontSize.title : props.theme.fontSize.sm};
  font-weight: bold;
  &:hover {
    color: ${(props) => props.theme.colors.neutral};
    background-color:
      ${(props) => props.theme.colors.primary}); 
      animation:  ${heartbeat} 1.5s ease-in-out infinite both;
`;
