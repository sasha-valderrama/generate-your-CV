import styled from '@emotion/styled';

export const UserName = styled.div`
margin-top:-1rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.quaternary};
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: bold;
  &> strong: font-weight:bold;
`;
