import React from 'react';
import { EditorButton } from './buttons';
import { MdDelete } from 'react-icons/md';
import styled from '@emotion/styled';
import { centerContent } from './utilities';

export default function RemoveEditor({ item, onRemoveItem }) {
  return (
    <EditorWrapper>
      <EditorButton onClick={(e) => onRemoveItem(e, { item })}>
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
