import React from 'react';
import { MdOutlineAddCircle } from 'react-icons/md';
import styled from '@emotion/styled';
import { EditorButton } from './buttons';


export default function AddEditor({ section, onAddItem }) {
  return (
    <EditorWrapper>
      <EditorButton add onClick={(e) => onAddItem(e, { section })}>
        <MdOutlineAddCircle />
      </EditorButton>
    </EditorWrapper>
  );
}

const EditorWrapper = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 0.2rem;
`;
