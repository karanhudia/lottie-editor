import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-react';
import { Layer, LottieAnimation } from '../types/LottieAnimation';

export const SharedProps = createContext<{
  dotLottie: DotLottie | null;
  setDotLottie: Dispatch<SetStateAction<DotLottie | null>>;
  lottieJSON: LottieAnimation | null;
  setLottieJSON: Dispatch<SetStateAction<LottieAnimation | null>>;
  selectedLayer: Layer | null;
  setSelectedLayer: Dispatch<SetStateAction<Layer | null>>;
}>({
  dotLottie: null,
  setDotLottie: () => null,
  lottieJSON: null,
  setLottieJSON: () => null,
  selectedLayer: null,
  setSelectedLayer: () => null,
});

export const SharedPropsContext = ({ children }: { children: React.ReactNode }) => {
  const [lottieJSON, setLottieJSON] = useState<LottieAnimation | null>(null);
  const [dotLottie, setDotLottie] = React.useState<DotLottie | null>(null);
  const [selectedLayer, setSelectedLayer] = useState<Layer | null>(null);

  return (
    <SharedProps.Provider
      value={{
        dotLottie,
        setDotLottie,
        lottieJSON,
        setLottieJSON,
        selectedLayer,
        setSelectedLayer,
      }}
    >
      {children}
    </SharedProps.Provider>
  );
};
