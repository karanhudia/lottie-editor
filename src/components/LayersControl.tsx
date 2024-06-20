import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { Box, Button, FormLabel, Radio, RadioGroup, Sheet } from '@mui/joy';
import { useSocket } from '../hooks/useSocket';
import { useParams } from 'react-router-dom';

export const LayersControl = () => {
  const { lottieJSON, selectedLayer, setSelectedLayer } = useContext(SharedProps);
  const { updateJSON } = useSocket();
  const foo = useParams<{ editId: string }>();

  return (
    <Box sx={{ width: 300 }}>
      <FormLabel
        id='storage-label'
        sx={{
          padding: 2,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.15rem',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        Layers
      </FormLabel>
      <Button
        onClick={() => {
          if (!foo.editId || !lottieJSON) {
            return;
          }

          updateJSON(foo.editId, {
            ...lottieJSON,
            nm: 'Useless',
          });
        }}
      >
        Change name
      </Button>
      <RadioGroup
        aria-labelledby='storage-label'
        // defaultValue='512GB'
        // size='sm'
        sx={{ gap: 1 }}
      >
        {lottieJSON?.layers.map((layer) => (
          <Sheet
            // key={value}
            sx={{
              p: 1,
              borderRadius: 'md',
              boxShadow: 'sm',
            }}
          >
            <Radio
              label={layer.nm}
              overlay
              disableIcon
              value={layer.nm}
              onChange={(event) => {
                console.log(event.target.value);
                if (selectedLayer === layer) {
                  setSelectedLayer(null);
                } else {
                  setSelectedLayer(layer);
                }
              }}
              {...(selectedLayer === layer && { variant: 'solid' })}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    // fontWeight: 'lg',
                    fontSize: 'xs',
                    color: checked ? 'white' : 'black',
                  },
                }),
                action: ({ checked }) => ({
                  sx: (theme) => ({
                    ...(checked && {
                      // '--variant-borderWidth': '2px',
                      '&&': {
                        // && to increase the specificity to win the base :hover styles
                        // borderColor: theme.vars.palette.primary[500],
                      },
                    }),
                  }),
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
};
