import React from 'react';
import { Box, Typography } from '@mui/joy';
import { AnimationOutlined } from '@mui/icons-material';
import { useFetchFeaturedAnimationsQuery } from '../graphql/lottiefiles/generated';
import { AnimationCard } from './AnimationCard';
import { lottieFilesClient } from '../graphql/lottiefiles/lottieFilesClient';

export const FeaturedAnimations = () => {
  const { data, loading } = useFetchFeaturedAnimationsQuery({
    client: lottieFilesClient,
  });

  if (loading || !data?.featuredPublicAnimations.edges) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography color='neutral' level='h4' pb={3} endDecorator={<AnimationOutlined />}>
        Choose from our featured animations
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, auto)',
          gridGap: 20,
          padding: 5,
          border: '1px solid var(--joy-palette-neutral-100, #F0F4F8)',
        }}
      >
        {data.featuredPublicAnimations.edges.map((edge) => {
          return <AnimationCard key={edge.node.id} animation={edge.node} />;
        })}
      </Box>
    </Box>
  );
};
