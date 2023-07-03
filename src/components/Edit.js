import React from 'react';
import { EditorButton } from './ui-styles/buttons';
import { MdOutlineAddCircle } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import styled from '@emotion/styled';
import { centerContent } from './ui-styles/utilities';

export default function Edit({ item, onAddItem, onRemoveItem }) {
  return (
    <EditorWrapper>
      <EditorButton add onClick={() => onAddItem({ item })}>
        <MdOutlineAddCircle />
      </EditorButton>
      <EditorButton onClick={() => onRemoveItem({ item })}>
        <MdDelete />
      </EditorButton>
    </EditorWrapper>
  );
}

const EditorWrapper = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 1rem;
  right: -0.5rem;
  width: fit-content;
  height: fit-content;
  ${centerContent};
  gap: 1rem;
  border: 1px solid red;
  // background-color: ${(props) => props.theme.colors.accent};
`;
