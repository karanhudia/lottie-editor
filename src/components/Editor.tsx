import React, { useCallback } from 'react';
import { useSharedProps } from '../context/SharedPropsContext';
import { useParams } from 'react-router-dom';
import {
  FetchEditedLottieQuery,
  useFetchEditedLottieQuery,
} from '../graphql/lottie-server/generated';
import { Header } from './Header';
import { Content } from './Content';
import { isLottieAnimation } from '../utils/typeGuard';
import { Error } from '../pages/Error';
import { useNetworkState } from '../context/NetworkStateContext';

export type EditorRouteParams = { editId: string };

export const Editor = () => {
  const { lottieJSON } = useSharedProps();
  const { synchronizeLottieInformation } = useNetworkState();
  const params = useParams<EditorRouteParams>();

  const handleFetchCompleted = useCallback(
    (data: FetchEditedLottieQuery) => {
      if (!isLottieAnimation(data.lottie?.json)) {
        return;
      }

      synchronizeLottieInformation(data.lottie.json, data.lottie.version);
    },
    [synchronizeLottieInformation],
  );

  const { error } = useFetchEditedLottieQuery({
    variables: {
      editId: params.editId ?? '',
    },
    fetchPolicy: 'no-cache',
    onCompleted: handleFetchCompleted,
    // Re-fetches on network reconnects to sync
    notifyOnNetworkStatusChange: true,
    skip: !!lottieJSON,
  });

  if (error) {
    return <Error apolloError={error} />;
  }

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
