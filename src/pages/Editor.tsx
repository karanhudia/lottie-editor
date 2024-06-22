import React, { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { SharedProps } from '../context/SharedPropsContext';
import { useLoaderData } from 'react-router-dom';
import { LottieAnimation } from '../types/LottieAnimation';

const fetchLottie = async () => {
  try {
    // TODO: Fetch data from BACKEND
    const response = await fetch(
      'https://assets-v2.lottiefiles.com/a/3c01a012-27ca-11ef-a9a3-53cd7688f762/fvgzs9fjrn.json',
    );
    return (await response.json()) as LottieAnimation;
  } catch (error) {
    console.error(error);
  }
};

export async function loader() {
  const lottie = await fetchLottie();

  return { lottie };
}

export const Editor = () => {
  const { lottie } = useLoaderData() as { lottie: LottieAnimation };

  const { setLottieJSON } = useContext(SharedProps);

  useEffect(() => {
    console.info('Fetched Lottie', lottie);
    setLottieJSON(lottie);
  }, [lottie, setLottieJSON]);

  return (
    <>
      <Header />
      <Content />
    </>
  );
};
