import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';
import { ColorPayload, LottieAnimation } from '../graphql/lottie-server/generated';
import { LayerInfo } from '../types/shared';

export type SharedContextProps = {
  lottieJSON: LottieAnimation | null;
  setLottieJSON: Dispatch<SetStateAction<LottieAnimation | null>>;
  selectedLayer: LayerInfo | null;
  updateLayer: (newLayer?: LayerInfo) => void;
  selectedColor: ColorPayload | null;
  setSelectedColor: Dispatch<SetStateAction<ColorPayload | null>>;
  isAnimationCreated: boolean;
  setIsAnimationCreated: Dispatch<SetStateAction<boolean>>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  animationVersion: React.MutableRefObject<number>;
};

export const SharedProps = createContext<SharedContextProps>({
  lottieJSON: null,
  setLottieJSON: () => null,
  selectedLayer: null,
  updateLayer: () => null,
  selectedColor: null,
  setSelectedColor: () => null,
  isAnimationCreated: false,
  setIsAnimationCreated: () => null,
  isDrawerOpen: false,
  setIsDrawerOpen: () => null,
  animationVersion: {
    current: 1,
  },
});

export const SharedPropsContext = ({ children }: { children: React.ReactNode }) => {
  // Lottie Animation JSON
  const [lottieJSON, setLottieJSON] = useState<LottieAnimation | null>(null);

  // Lottie Animation Current Version compared to server
  const animationVersion = useRef<number>(1);

  // Selected layer helps shows relevant colors from that layer
  const [selectedLayer, setSelectedLayer] = useState<LayerInfo | null>(null);

  // Selected color helps shows the color picker
  const [selectedColor, setSelectedColor] = useState<ColorPayload | null>(null);

  // This is only true when an animation is just imported
  const [isAnimationCreated, setIsAnimationCreated] = useState(false);

  // This is for mobile drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // TODO: Move to its own hook
  const handleLayerSelect = useCallback(
    (newLayer?: LayerInfo) => {
      setSelectedLayer(newLayer ?? null);
      setSelectedColor(null);
    },
    [setSelectedLayer, setSelectedColor],
  );

  return (
    <SharedProps.Provider
      value={{
        lottieJSON,
        setLottieJSON,
        selectedLayer,
        updateLayer: handleLayerSelect,
        selectedColor,
        setSelectedColor,
        isAnimationCreated,
        setIsAnimationCreated,
        isDrawerOpen,
        setIsDrawerOpen,
        animationVersion,
      }}
    >
      {children}
    </SharedProps.Provider>
  );
};

export const useSharedProps = () => {
  const context = useContext(SharedProps);

  if (context === undefined) {
    throw new Error('useSharedProps must be used within a SharedProps provider');
  }

  return context;
};
