import styled from '@emotion/styled';
import { marginAuto } from '../../../util/utilities';

export const BodyWrapper = styled.main`
  display: grid;
  ${marginAuto};
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
