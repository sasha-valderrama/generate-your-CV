import styled from '@emotion/styled';
import { standardBorderRadius } from '../../../util/utilities';

export const HeadingContainer = styled.div`
  position: relative;
  // z-index: 0;
  display: flex;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  width: 75%;
  height: fit-content;
  margin-left: auto;
  margin-right: 3rem;
  border: 3px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.accentThird};
  box-shadow: ${(props) => `-5px 5px 0 ${props.theme.colors.white}`};
  ${standardBorderRadius};
`;
