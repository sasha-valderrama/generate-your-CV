import React from 'react';
import styled from '@emotion/styled';

export default function Home() {
  return <HomeStyled>HomeSTyling</HomeStyled>;
}

const HomeStyled = styled.div`
  color: ${(props) => props.theme.colors.quaternary};
`;
