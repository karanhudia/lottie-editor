import React from 'react';
import { Radio, radioClasses, Sheet } from '@mui/joy';
import { RgbaColor } from 'react-colorful';

type SelectableColorItemProps = {
  color: RgbaColor;
  onSelect: (color: RgbaColor) => void;
  id: string;
  selected: boolean;
};

export const SelectableColorItem = ({
  color,
  onSelect,
  id,
  selected,
}: SelectableColorItemProps) => {
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
        checked={selected}
        onChange={() => {
          onSelect(color);
        }}
        value={id}
        aria-label={`Color ${id}`}
        sx={{
          [`& .${radioClasses.action}.${radioClasses.checked}`]: {
            '--variant-borderWidth': '2px',
            borderColor: 'text.secondary',
          },
          // This shows the actual color of the icon
          [`& .${radioClasses.action}`]: {
            backgroundColor: `rgba(${Object.values(color).join()})`,
          },
        }}
      />
    </Sheet>
  );
};
