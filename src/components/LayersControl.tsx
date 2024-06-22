import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { Box, List, ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy';
import { getLottieDPArray, LayerInfo } from '../utils/lottie';

export const LayersControl = () => {
  const { lottieJSON, selectedLayer, updateLayer } = useContext(SharedProps);
  const lottieDp = getLottieDPArray(lottieJSON);

  const handleLayerSelect = (layerInfo: LayerInfo) => {
    updateLayer(layerInfo);
  };

  return (
    <Box sx={{ py: 2, pr: 2, width: 320, padding: 3 }}>
      <Typography textAlign='start' level='h4'>
        Layers
      </Typography>
      <List
        aria-label='Sidebar'
        sx={
          {
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
          }
        }
      >
        {lottieDp.map((layerInfo) => {
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
