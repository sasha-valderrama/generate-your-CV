import styled from '@emotion/styled';

export const ContactItem = styled.input`
  color: ${(props) => props.theme.colors.quaternary};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  border: 1px solid red;
`;
