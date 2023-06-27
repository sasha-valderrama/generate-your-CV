import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

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
