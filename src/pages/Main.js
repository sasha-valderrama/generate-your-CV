import styled from '@emotion/styled';
import React from 'react';
import CVform from './CVForm';
import { Edit } from '../components/ui/Edit';

export default function Main() {
  return (
    <MainStyled>
      <Edit left>EXAMPLE</Edit>
      <CVform></CVform>
      <Edit right>UPDATE</Edit>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  width: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
