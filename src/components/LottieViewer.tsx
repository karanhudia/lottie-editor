import React, { useContext } from 'react';
import { SharedProps } from '../context/SharedPropsContext';
import { AspectRatio, Skeleton, Stack } from '@mui/joy';
import { Controls, Player, PlayerEvent } from '@lottiefiles/react-lottie-player';
import { AnimationItem } from 'lottie-web';
import { useCreateLottieJsonMutation } from '../graphql/lottie-server/generated';
import { useParams } from 'react-router-dom';
import { EditorRouteParams } from './Editor';

export const LottieViewer = () => {
  const { isAnimationCreated, setLottiePlayerRef, lottieJSON, setIsAnimationCreated } =
    useContext(SharedProps);
  const params = useParams<EditorRouteParams>();
  const [createLottieJsonMutation] = useCreateLottieJsonMutation();

  const handleLottieRefCallback = (dotLottie: AnimationItem) => {
    setLottiePlayerRef(dotLottie);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        minHeight: 0,
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
          onEvent={(event) => {
            // ###### Why do we do this? ######
            // The default JSON format handles layers and assets differently
            // When the json is loaded in the Lottie Player it mutates the json reference
            // Into a format which can be read by our lottie editor and so safe to update to server
            if (event === PlayerEvent.Load && isAnimationCreated) {
              if (!params.editId) {
                return;
              }

              // TODO: Disable all controls until a callback is received
              void createLottieJsonMutation({
                variables: {
                  editId: params.editId,
                  json: lottieJSON,
                },
              });
              setIsAnimationCreated(false);
            }
          }}
          src={lottieJSON}
          lottieRef={handleLottieRefCallback}
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
