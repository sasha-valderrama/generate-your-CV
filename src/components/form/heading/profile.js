import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const HeadingContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  width: 75%;
  height: fit-content;
  margin-left: auto;
  margin-right: 3rem;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accentThird};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
  ${standardBorderRadius};
`;

export const ProfileContainer = styled.div`
  position: relative;
  z-index: 999;
  left: 0.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ProfilePic = styled.img`
  position: absolute;
  left: -21.5%;
  top: 2.5rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 180px;
  height: 250px;
  ${standardBorderRadius};
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accent};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
`;

export const ProfileInput = styled.input`
  margin-top: -1rem;
  margin-left: 1.5rem;
  margin-bottom: ${(props) => (props.username ? '1rem' : '')};
  text-transform: uppercase;
  background-color: inherit;
  font-weight: bold;
  border: none;
  width: 100%;
  color: ${(props) =>
    props.username ? props.theme.colors.primary : props.theme.colors.secondary};
  font-size: ${(props) =>
    props.username ? props.theme.fontSize.xxl : props.theme.fontSize.lg};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;
