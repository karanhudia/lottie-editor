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

export type EditorRouteParams = { editId: string };

export const Editor = () => {
  const { setLottieJSON } = useSharedProps();
  const params = useParams<EditorRouteParams>();

  const handleFetchCompleted = useCallback(
    (data: FetchEditedLottieQuery) => {
      if (!isLottieAnimation(data.lottie?.json)) {
        return;
      }

      setLottieJSON(data.lottie.json);
    },
    [setLottieJSON],
  );

  useFetchEditedLottieQuery({
    variables: {
      editId: params.editId ?? '',
    },
    fetchPolicy: 'no-cache',
    onCompleted: handleFetchCompleted,
  });

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
