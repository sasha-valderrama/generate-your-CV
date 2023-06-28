import styled from '@emotion/styled';
import React from 'react';
import { SwitchView } from '../components/ui/SwitchView';
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
      <SwitchView left onClick={showExample}>
        EXAMPLE
      </SwitchView>
      <Outlet />
      <SwitchView right onClick={showUpdate}>
        UPDATE
      </SwitchView>
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
