import styled from '@emotion/styled';
import React from 'react';
import { standardBorderRadius } from '../util/utilities';

export default function CVform() {
  return (
    <CVContainer>
      <CVMain>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
        <div>dfdsfdsfdsfdf</div>
      </CVMain>
    </CVContainer>
  );
}

const CVContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.black};
  ${standardBorderRadius};
  padding: 1rem;
`;

const CVMain = styled.div`
  width: 210mm;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  border: 1px solid red;
`;
