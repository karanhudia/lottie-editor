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
import { Delete, KeyboardArrowDown, Layers } from '@mui/icons-material';
import { LayerInfo } from '../types/shared';
import { useLottieAnimation } from '../hooks/useLottieAnimation';

type LayerGroupProps = {
  layer: LayerInfo;
  selected: boolean;
  nested: boolean;
  onSelect: (layer: LayerInfo) => void;
  selectedLayer: LayerInfo | null;
};

export const LayerGroup = ({
  layer,
  selected,
  onSelect,
  nested,
  selectedLayer,
}: LayerGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { layerName, layers } = layer;

  const { deleteLayer } = useLottieAnimation();

  return (
    <ListItem
      startAction={
        nested &&
        layers?.length && (
          <IconButton variant='plain' size='sm' color='neutral' onClick={() => setIsOpen(!isOpen)}>
            <KeyboardArrowDown sx={{ transform: isOpen ? 'initial' : 'rotate(-90deg)' }} />
          </IconButton>
        )
      }
      endAction={
        <IconButton aria-label='Delete' size='sm' onClick={() => deleteLayer(layer.nestedLayerSeq)}>
          <Delete
            sx={{
              fill: 'var(--joy-palette-danger-300, #F09898)',
            }}
          />
        </IconButton>
      }
      nested={nested}
    >
      <ListItemButton
        selected={selected}
        color={selected ? 'primary' : undefined}
        onClick={() => {
          if (nested) {
            setIsOpen(!isOpen);
          }
          onSelect(layer);
        }}
        sx={{
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
      {isOpen && (
        <List>
          {layers?.map((layer) => (
            <LayerGroup
              key={layer.layerName}
              layer={layer}
              onSelect={onSelect}
              selected={layer.layerName === selectedLayer?.layerName}
              selectedLayer={selectedLayer}
              nested={false}
            />
          ))}
        </List>
      )}
    </ListItem>
  );
};
