import React, { createContext, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { LayerInfo } from '../utils/lottie';
import { AnimationItem } from 'lottie-web';
import { LottieAnimation } from '../graphql/generated/graphql';
import { RgbaColor } from 'react-colorful';

export const SharedProps = createContext<{
  lottiePlayerRef: AnimationItem | null;
  setLottiePlayerRef: Dispatch<SetStateAction<AnimationItem | null>>;
  lottieJSON: LottieAnimation | null;
  setLottieJSON: Dispatch<SetStateAction<LottieAnimation | null>>;
  selectedLayer: LayerInfo | null;
  updateLayer: (newLayer: LayerInfo) => void;
  selectedColor: { r: number; g: number; b: number; a: number } | null;
  setSelectedColor: Dispatch<SetStateAction<{ r: number; g: number; b: number; a: number } | null>>;
  isSocketConnected: boolean;
  setIsSocketConnected: Dispatch<SetStateAction<boolean>>;
}>({
  lottiePlayerRef: null,
  setLottiePlayerRef: () => null,
  lottieJSON: null,
  setLottieJSON: () => null,
  selectedLayer: null,
  updateLayer: () => null,
  selectedColor: null,
  setSelectedColor: () => null,
  isSocketConnected: false,
  setIsSocketConnected: () => null,
});

export const SharedPropsContext = ({ children }: { children: React.ReactNode }) => {
  // Lottie Animation JSON
  const [lottieJSON, setLottieJSON] = useState<LottieAnimation | null>(null);

  // Keeps a reference of the lottie player
  const [lottiePlayerRef, setLottiePlayerRef] = React.useState<AnimationItem | null>(null);

  // Selected layer helps shows relevant colors from that layer
  const [selectedLayer, setSelectedLayer] = useState<LayerInfo | null>(null);

  // Selected color helps shows the color picker
  const [selectedColor, setSelectedColor] = useState<RgbaColor | null>(null);

  // Maintains the state of websockets connection
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  // TODO: Move to its own hook
  const handleLayerSelect = useCallback(
    (newLayer: LayerInfo) => {
      setSelectedLayer(newLayer);
      setSelectedColor(null);
    },
    [setSelectedLayer, setSelectedColor],
  );

  return (
    <SharedProps.Provider
      value={{
        lottiePlayerRef,
        setLottiePlayerRef,
        lottieJSON,
        setLottieJSON,
        selectedLayer,
        updateLayer: handleLayerSelect,
        selectedColor,
        setSelectedColor,
        isSocketConnected,
        setIsSocketConnected,
      }}
    >
      {children}
    </SharedProps.Provider>
  );
};
