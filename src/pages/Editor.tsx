import React, { useContext } from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { SharedProps } from '../context/SharedPropsContext';
import { useParams } from 'react-router-dom';
import { useFetchEditedLottieQuery } from '../graphql/generated/graphql';

export const Editor = () => {
  const { setLottieJSON } = useContext(SharedProps);
  const params = useParams<{ editId: string }>();

  useFetchEditedLottieQuery({
    variables: {
      editId: params.editId ?? '',
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      setLottieJSON(data.lottie?.json);
    },
  });

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
