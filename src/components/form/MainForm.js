import styled from '@emotion/styled';

export const MainForm = styled.form`
  position: relative;
  z-index: 999;
  width: 210mm;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;
  background-color: ${(props) => props.theme.colors.quaternary};
`;
