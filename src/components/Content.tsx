import React from 'react';
import { styled } from '@mui/joy';
import { EditControls } from './EditControls';
import { SideBar } from './SideBar';
import { LottieViewer } from './LottieViewer';

const ContentWrapper = styled('div')`
  display: grid;
  height: calc(100% - 60px);
  grid-template-columns: 20% 60% 20%;
`;

export const Content = () => {
  return (
    <ContentWrapper>
      <SideBar />
      <LottieViewer />
      <EditControls />
    </ContentWrapper>
  );
};
