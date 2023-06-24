import styled from '@emotion/styled';

export const ProfilePic = styled.img`
  position: relative;
  left: -17%;
  margin-top: auto;
  margin-bottom: auto;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  // border: 2px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accent};
`;
