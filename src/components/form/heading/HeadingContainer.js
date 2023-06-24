import styled from '@emotion/styled';

export const HeadingContainer = styled.div`
  position: relative;
  // z-index: 0;
  display: flex;
  margin-top: 2rem;
  padding: 2rem;
  width: 78%;
  height: fit-content;
  margin-left: auto;
  margin-right: 4rem;
  border: 2px solid ${(props) => props.theme.colors.black};
`;
