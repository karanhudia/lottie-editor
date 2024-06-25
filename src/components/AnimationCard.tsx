import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  Skeleton,
  Typography,
} from '@mui/joy';
import { Download, Favorite } from '@mui/icons-material';
import { FetchFeaturedAnimationsQuery } from '../graphql/lottiefiles/generated';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { LottieAnimation } from '../graphql/lottie-server/generated';
import { fetchAsyncJsonApi } from '../api';
import { isLottieAnimation } from '../utils/typeGuard';

type AnimationCardProps = {
  animation?: FetchFeaturedAnimationsQuery['featuredPublicAnimations']['edges'][0]['node'];
  loading?: boolean;
};

export const AnimationCard = ({ animation, loading }: AnimationCardProps) => {
  const { importLottie } = useLottieAnimation();

  const handleAnimationClick = async () => {
    if (!animation?.jsonUrl) {
      return;
    }

    const response = await fetchAsyncJsonApi<LottieAnimation | null>(animation.jsonUrl);

    if (!isLottieAnimation(response)) {
      return;
    }

    importLottie(response);
  };

  const LoadedCard = () => (
    <Box sx={{ position: 'relative' }}>
      <AspectRatio ratio='4/3'>
        <figure>
          <Player autoplay loop src={animation?.jsonUrl ?? ''} controls />
        </figure>
      </AspectRatio>
      <CardCover
        className='gradient-cover'
        sx={{
          '&:hover, &:focus-within': {
            opacity: 1,
          },
          opacity: 0,
          transition: '0.1s ease-in',
          background:
            'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
        }}
      >
        {/* The first box acts as a container that inherits style from the CardCover */}
        <div>
          <Box
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              flexGrow: 1,
              alignSelf: 'flex-end',
            }}
          >
            <Button variant='solid' color='primary' onClick={handleAnimationClick}>
              Use me
            </Button>
          </Box>
        </div>
      </CardCover>
      <CardContent
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          margin: '8px',

          opacity: 0.5,
        }}
      >
        <Typography level='body-xs' color='neutral' startDecorator={<Download />}>
          {animation?.downloads}
        </Typography>
        <Typography level='body-xs' color='neutral' startDecorator={<Favorite />}>
          {animation?.likesCount}
        </Typography>
      </CardContent>
    </Box>
  );

  return (
    <Card
      variant='plain'
      sx={{
        maxWidth: 180,
        minWidth: 160,
        width: '100%',
        bgcolor: 'initial',
        p: 0,
      }}
    >
      {loading ?? !animation ? (
        <Box sx={{ height: { lg: 135, xs: 120 } }}>
          <Skeleton sx={{ borderRadius: 'var(--CardCover-radius)' }}>
            <img
              src={'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}
              alt='Loading Skeleton'
            />
          </Skeleton>
        </Box>
      ) : (
        <LoadedCard />
      )}
    </Card>
  );
};
