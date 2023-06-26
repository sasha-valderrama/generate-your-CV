import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const ProfilePic = styled.img`
  position: absolute;
  left: -20%;
  top: 1.5rem;
  margin-top: auto;
  margin-bottom: auto;
  width: 145px;
  height: 180px;
  ${standardBorderRadius};
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accent};
`;
