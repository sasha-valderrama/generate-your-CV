import styled from '@emotion/styled';
import { standardBorderRadius } from '../../util/utilities';

export const OuterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
  padding: 1rem;
`;
