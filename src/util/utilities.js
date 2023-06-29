import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const defaultInput = styled.input`
  background-color: inherit;
  border: none;
  font-size: inherit;
  font-weight: bold;
  width: 100%;
  color: ${(props) => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
  ::placeholder {
    font-size: ${(props) => props.theme.fontSize.md};
  }
`;

export const defaultTextarea = styled.textarea`
  background-color: inherit;
  resize: none;
  border: none;
  color: ${(props) => props.theme.colors.black};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.white};
    outline: none;
  }
`;

export const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centerSpaceAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const standardBorderRadius = css`
  border-radius: 10px 0px 10px 0px;
`;

export const standardBorder = css`
  border: 4px solid #000;
`;
