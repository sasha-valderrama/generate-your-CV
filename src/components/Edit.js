import React from 'react';
import { EditorButton } from './ui-styles/buttons';
import { MdOutlineAddCircle } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import styled from '@emotion/styled';
import { centerContent } from './ui-styles/utilities';

export default function Edit({ item, id, section, onAddItem, onRemoveItem }) {
  return (
    <EditorWrapper>
      {/* <EditorButton add onClick={() => onAddItem({ item, section })}>
        <MdOutlineAddCircle />
      </EditorButton> */}
      <EditorButton onClick={() => onRemoveItem({ item, section })}>
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
`;
