import React from 'react';
import { Box, Grid, Typography } from '@mui/joy';
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
      <Typography color='neutral' level='h4' p={3} pb={0} endDecorator={<AnimationOutlined />}>
        Choose from our featured animations
      </Typography>
      <Grid
        container
        columns={20}
        spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: { xs: 2, lg: 5 },
          padding: { xs: 1, lg: 2 },
          border: '1px solid var(--joy-palette-neutral-100, #F0F4F8)',
        }}
      >
        {data.featuredPublicAnimations.edges.map((edge) => (
          <Grid xl={4} key={edge.node.id}>
            <AnimationCard animation={edge.node} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
