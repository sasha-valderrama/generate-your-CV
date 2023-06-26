import styled from '@emotion/styled';
import React from 'react';
import { Edit } from '../components/ui/Edit';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const showExample = () => {
    navigate('/cv-form/example');
  };

  const showUpdate = () => {
    navigate('/cv-form/update');
  };

  return (
    <MainContainer>
      <Edit left onClick={showExample}>
        EXAMPLE
      </Edit>
      <Outlet />
      <Edit right onClick={showUpdate}>
        UPDATE
      </Edit>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
  background-color: ${(props) => props.theme.colors.neutral};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
