import styled from '@emotion/styled';

export const EditorWrapper = styled.div`
  position: absolute;
  z-index: 999;
  width: 300px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.accent};
`;
