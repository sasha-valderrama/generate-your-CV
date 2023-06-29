import styled from '@emotion/styled';
import {
  marginAuto,
  standardBorderRadius,
  thinBorder,
} from '../../../util/utilities';
import { defaultInput } from '../../../util/utilities';

export const HeadingContainer = styled.div`
  position: relative;
  width: 75%;
  height: fit-content;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: 3rem;
  padding: 0.8rem 2rem;
  ${thinBorder};
  ${standardBorderRadius};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
  background-color: ${(props) => props.theme.colors.accentThird};
`;

export const ProfileContainer = styled.div`
  position: relative;
  left: 0.5rem;
  z-index: 999;
  ${marginAuto};
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`;

export const ProfilePic = styled.img`
  position: absolute;
  left: -21.5%;
  top: 2.5rem;
  width: 180px;
  height: 250px;
  ${marginAuto};
  ${standardBorderRadius};
  ${thinBorder};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
  background-color: ${(props) => props.theme.colors.accent};
`;

export const ProfileInput = styled(defaultInput)`
  margin-top: -1rem;
  margin-left: 1.5rem;
  margin-bottom: ${(props) => (props.username ? '1rem' : '')};
  text-transform: uppercase;
  color: ${(props) =>
    props.username ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: ${(props) =>
    props.username ? props.theme.fontSize.xxl : props.theme.fontSize.lg};
`;
