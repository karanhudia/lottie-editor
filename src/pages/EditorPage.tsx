import React from 'react';
import { useSocket } from '../hooks/useSocket';
import { Editor } from '../components/Editor';

export const EditorPage = () => {
  useSocket();

  return <Editor />;
};
