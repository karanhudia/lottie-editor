import React from 'react';
import { Radio, radioClasses, Sheet } from '@mui/joy';
import { RgbaColor } from 'react-colorful';

type SelectableColorItemProps = {
  color: RgbaColor;
  onSelect: (color: RgbaColor) => void;
  id: string;
};

export const SelectableColorItem = ({ color, onSelect, id }: SelectableColorItemProps) => {
  return (
    <Sheet
      sx={{
        width: 30,
        height: 30,
        borderRadius: '50%',
      }}
    >
      <Radio
        overlay
        disableIcon
        onChange={() => {
          onSelect(color);
        }}
        value={id}
        sx={{
          [`& .${radioClasses.action}.${radioClasses.checked}`]: {
            '--variant-borderWidth': '2px',
            borderColor: 'text.secondary',
          },
          // This shows the actual color of the icon
          [`& .${radioClasses.action}`]: {
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          },
        }}
      />
    </Sheet>
  );
};
