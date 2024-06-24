import React from 'react';
import { useFetchFeaturedAnimationsQuery } from '../graphql/lottiefiles/generated';
import { Box, Typography } from '@mui/joy';
import { AnimationCard } from './AnimationCard';

export const FeaturedAnimations = () => {
  const { data, loading } = useFetchFeaturedAnimationsQuery();

  if (loading || !data?.featuredPublicAnimations.edges) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Typography color='neutral' level='h2' pb={8}>
        Choose from our featured animations
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, auto)',
          gridGap: 10,
        }}
      >
        {data?.featuredPublicAnimations.edges.map((edge) => {
          return <AnimationCard animation={edge.node} />;
        })}
      </Box>
    </Box>
  );
};
