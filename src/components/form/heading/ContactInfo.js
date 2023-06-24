import styled from '@emotion/styled';

export const ContactInfo = styled.div`
  position: absolute;
  z-index: -1;
  right: -1.5rem;
  width: 32rem;
  height: 8rem;
  margin-top: 1rem;
  top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3.2rem;
  background-color: ${(props) => props.theme.colors.accent};
`;
