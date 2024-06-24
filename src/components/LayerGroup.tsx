import React, { useState } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import { Delete, Layers } from '@mui/icons-material';
import { LayerInfo } from '../types/shared';
import { LayerShape } from './LayerShape';

type LayerGroupProps = {
  layer: LayerInfo;
  selected: boolean;
  onSelect: (layer: LayerInfo) => void;
};

export const LayerGroup = ({ layer, selected, onSelect }: LayerGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { layerName, shapes } = layer;

  return (
    <>
      <ListItem
        key={layerName}
        endAction={
          <IconButton aria-label='Delete' size='sm'>
            <Delete
              sx={{
                fill: 'var(--joy-palette-danger-300, #F09898)',
              }}
            />
          </IconButton>
        }
        nested
      >
        <ListItemButton
          selected={selected}
          color={selected ? 'primary' : undefined}
          onClick={() => {
            setIsOpen(!isOpen);
            onSelect(layer);
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
            <Typography level='body-xs' fontWeight={selected ? 800 : 500}>
              {layerName}
            </Typography>
          </ListItemContent>
        </ListItemButton>
        <List>
          {isOpen &&
            shapes.map((shape) => (
              <LayerShape layer={layer} onSelect={onSelect} selected={selected} shape={shape} />
            ))}
        </List>
      </ListItem>
    </>
  );
};
