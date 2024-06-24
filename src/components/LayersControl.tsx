import React, { useContext } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import { Layers } from '@mui/icons-material';
import { SharedProps } from '../context/SharedPropsContext';
import { getAnimationLayersInfo } from '../utils/lottie';
import { LayerInfo } from '../types/shared';

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
          padding: 0,
        }}
      >
        {allLayers.map((layerInfo) => {
          const isLayerSelected = layerInfo.layerName === selectedLayer?.layerName;

          return (
            <ListItem key={layerInfo.layerName}>
              <ListItemButton
                selected={layerInfo.layerName === selectedLayer?.layerName}
                color={isLayerSelected ? 'primary' : undefined}
                onClick={() => {
                  handleLayerSelect(layerInfo);
                }}
                sx={{
                  paddingLeft: 3,
                  gap: 0,
                }}
              >
                <ListItemDecorator>
                  <Layers />
                </ListItemDecorator>
                <ListItemContent>
                  <Typography level='body-xs' fontWeight={isLayerSelected ? 800 : 500}>
                    {layerInfo.layerName}
                  </Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
