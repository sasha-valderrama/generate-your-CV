import styled from '@emotion/styled';

export const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme.colors.quaternary};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const ContactIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
`;
