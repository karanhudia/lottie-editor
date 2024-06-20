import React from 'react';
import { Box, Button } from '@mui/joy';

type ColorBoxProps = {
  color: string;
};

export const ColorBox = ({ color }: ColorBoxProps) => {
  return (
    <Box sx={{ padding: 1 }}>
      <Button
        sx={{
          width: 20,
          backgroundColor: color,
        }}
        // onClick={() => setColor({ hex: color.color })}
      />
    </Box>
  );
};
