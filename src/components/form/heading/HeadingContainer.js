import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const HeadingContainer = styled.div`
  position: relative;
  // z-index: 0;
  display: flex;
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  width: 80%;
  height: fit-content;
  margin-left: auto;
  margin-right: 3.5rem;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accent};
  ${standardBorderRadius};
`;
