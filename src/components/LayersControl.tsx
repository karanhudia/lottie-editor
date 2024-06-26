import React, { useCallback, useMemo } from 'react';
import { List, ListItem, Skeleton, Typography } from '@mui/joy';
import { useSharedProps } from '../context/SharedPropsContext';
import { getAnimationLayersInfo } from '../utils/lottie';
import { LayerInfo } from '../types/shared';
import { LayerGroup } from './LayerGroup';
import { LayersWrapper } from './LayersWrapper';

const LayerItemSkeleton = () => (
  <ListItem sx={{ mr: 1, ml: 2 }}>
    <Skeleton animation='wave' variant='text' level='body-lg' />
  </ListItem>
);

export const LayersControl = () => {
  const { lottieJSON, selectedLayer, updateLayer } = useSharedProps();
  const allLayers = useMemo(() => getAnimationLayersInfo(lottieJSON), [lottieJSON]);

  const handleLayerSelect = useCallback(
    (layerInfo: LayerInfo) => {
      updateLayer(layerInfo);
    },
    [updateLayer],
  );

  return (
    <LayersWrapper>
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
        {!lottieJSON
          ? Array.from({ length: 15 }, (_, index) => <LayerItemSkeleton key={index} />)
          : allLayers.map((layerInfo, index) => {
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
    </LayersWrapper>
  );
};
