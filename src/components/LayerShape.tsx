import React from 'react';
import { ListItem, ListItemButton, ListItemContent, ListItemDecorator, Typography } from '@mui/joy';
import { FormatShapesOutlined } from '@mui/icons-material';
import { LayerInfo, ShapeInfo } from '../types/shared';

type LayerGroupItemProps = {
  layer: LayerInfo;
  shape: ShapeInfo;
  selected: boolean;
  onSelect: (layer: LayerInfo) => void;
};

export const LayerShape = ({ layer, selected, onSelect, shape }: LayerGroupItemProps) => {
  return (
    <ListItem key={layer.layerName}>
      <ListItemButton
        selected={selected}
        color={selected ? 'primary' : undefined}
        onClick={() => {
          onSelect(layer);
        }}
        sx={{
          paddingLeft: 5,
          gap: 0,
        }}
      >
        <ListItemDecorator>
          <FormatShapesOutlined />
        </ListItemDecorator>
        <ListItemContent>
          <Typography level='body-xs' fontWeight={selected ? 800 : 500}>
            {shape.shapeName}
          </Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
