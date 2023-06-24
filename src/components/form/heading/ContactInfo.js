import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const ContactInfo = styled.div`
  position: absolute;
  z-index: 0;
  right: -1.5rem;
  width: 16rem;
  height: 8rem;
  margin-top: 1rem;
  top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 3.2rem;
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
`;
