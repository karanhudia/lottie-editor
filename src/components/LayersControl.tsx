import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { Box, List, ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy';
import { getAnimationLayersInfo } from '../utils/lottie';
import { LayerInfo } from '../types/shared';

export const LayersControl = () => {
  const { lottieJSON, selectedLayer, updateLayer } = useContext(SharedProps);
  const allLayers = getAnimationLayersInfo(lottieJSON);

  const handleLayerSelect = (layerInfo: LayerInfo) => {
    updateLayer(layerInfo);
  };

  return (
    <Box sx={{ py: 2, pr: 2, padding: 3 }}>
      <Typography color='neutral' textAlign='start' level='h4'>
        Layers
      </Typography>
      <List
        aria-label='Sidebar'
        sx={{
          backgroundColor: 'white',
          padding: 0,
          marginTop: 2,
          // '--ListItem-paddingLeft': '0px',
          // '--ListItemDecorator-size': '64px',
          // '--ListItem-minHeight': '32px',
          // '--List-nestedInsetStart': '13px',
          // [`& .${listItemDecoratorClasses.root}`]: {
          //   justifyContent: 'flex-end',
          //   pr: '18px',
          // },
          // '& [role="button"]': {
          //   borderRadius: '0 20px 20px 0',
          // },
        }}
      >
        {allLayers.map((layerInfo) => {
          return (
            <ListItem
              sx={{
                border: '1px solid var(--joy-palette-neutral-400)',
              }}
            >
              <ListItemButton
                selected={layerInfo.layerName === selectedLayer?.layerName}
                color={layerInfo.layerName === selectedLayer?.layerName ? 'primary' : undefined}
                onClick={() => {
                  handleLayerSelect(layerInfo);
                }}
              >
                <ListItemContent>{layerInfo.layerName}</ListItemContent>
                {/*<ListItemDecorator>*/}
                {/*  <SvgIcon />*/}
                {/*</ListItemDecorator>*/}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
