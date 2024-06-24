import React, { useContext } from 'react';
import { Box, List, Typography } from '@mui/joy';
import { SharedProps } from '../context/SharedPropsContext';
import { getAnimationLayersInfo } from '../utils/lottie';
import { LayerInfo } from '../types/shared';
import { LayerGroup } from './LayerGroup';

export const LayersControl = () => {
  const { lottieJSON, selectedLayer, updateLayer } = useContext(SharedProps);
  const allLayers = getAnimationLayersInfo(lottieJSON);

  const handleLayerSelect = (layerInfo: LayerInfo) => {
    updateLayer(layerInfo);
  };

  return (
    <Box sx={{ py: 1 }}>
      <Typography
        color='neutral'
        textAlign='start'
        level='title-lg'
        sx={{ padding: 3, paddingBottom: 1 }}
      >
        Layers
      </Typography>
      <List
        aria-label='Sidebar'
        sx={{
          '--ListItem-paddingLeft': '24px',
          '--List-nestedInsetStart': '15px',
          '--ListItem-startActionWidth': '20px',
        }}
      >
        {allLayers.map((layerInfo, index) => {
          const isLayerSelected = layerInfo.layerName === selectedLayer?.layerName;

          return (
            <LayerGroup
              key={`${layerInfo.layerName}-${index}`}
              layer={layerInfo}
              selected={isLayerSelected}
              selectedLayer={selectedLayer}
              onSelect={handleLayerSelect}
              nested
            />
          );
        })}
      </List>
    </Box>
  );
};
