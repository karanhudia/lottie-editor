import React, { useCallback } from 'react';
import { useSharedProps } from '../context/SharedPropsContext';
import { AspectRatio, Skeleton, Stack } from '@mui/joy';
import { Controls, Player, PlayerEvent } from '@lottiefiles/react-lottie-player';
import { useCreateLottieJsonMutation } from '../graphql/lottie-server/generated';
import { useParams } from 'react-router-dom';
import { EditorRouteParams } from './Editor';

export const LottieViewer = () => {
  const { isAnimationCreated, lottieJSON, setIsAnimationCreated } = useSharedProps();
  const params = useParams<EditorRouteParams>();
  const [createLottieJsonMutation] = useCreateLottieJsonMutation();

  const handlePlayerEvent = useCallback(
    (event: PlayerEvent) => {
      // ###### Why do we do this? ######
      // The default JSON format handles layers and assets differently
      // When the json is loaded in the Lottie Player it mutates the json reference
      // Into a format which can be read by our lottie editor and so safe to update to server
      if (event === PlayerEvent.Load && isAnimationCreated) {
        if (!params.editId) return;

        void createLottieJsonMutation({
          variables: {
            editId: params.editId,
            json: lottieJSON,
          },
        });

        setIsAnimationCreated(false);
      }
    },
    [
      createLottieJsonMutation,
      isAnimationCreated,
      lottieJSON,
      params.editId,
      setIsAnimationCreated,
    ],
  );

  return (
    <Stack
      spacing={2}
      sx={{
        minHeight: 0,
        height: '100%',
        backgroundColor: 'var(--joy-palette-neutral-100, #F0F4F8)',
      }}
    >
      {!lottieJSON ? (
        <AspectRatio flex={true}>
          <Skeleton>
            <img
              src={'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}
              alt='Loading Skeleton'
            />
          </Skeleton>
        </AspectRatio>
      ) : (
        <Player
          autoplay
          loop
          onEvent={handlePlayerEvent}
          src={lottieJSON}
          controls
          keepLastFrame
          style={{ height: '100%' }}
          background={'var(--joy-palette-neutral-100, #F0F4F8)'}
        >
          <Controls
            visible={true}
            transparentTheme
            buttons={['play', 'repeat', 'frame', 'debug']}
          />
        </Player>
      )}
    </Stack>
  );
};
