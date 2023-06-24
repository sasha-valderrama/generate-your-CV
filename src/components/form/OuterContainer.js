import styled from '@emotion/styled';
import { standardBorderRadius } from '../../util/utilities';

export const OuterContainer = styled.div`
  border: 3px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
  padding: 1rem;
`;
