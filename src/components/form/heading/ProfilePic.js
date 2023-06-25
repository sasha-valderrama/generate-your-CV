import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const ProfilePic = styled.img`
  position: absolute;
  left: -20%;
  margin-top: auto;
  margin-bottom: auto;
  width: 9rem;
  // width: 150px;
  // height: 170px;
  ${standardBorderRadius};
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accent};
`;
