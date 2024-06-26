import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import { AnimationItem } from 'lottie-web';
import { LottieAnimation } from '../graphql/lottie-server/generated';
import { LayerInfo, SelectedColor } from '../types/shared';

export const SharedProps = createContext<{
  lottiePlayerRef: AnimationItem | null;
  setLottiePlayerRef: Dispatch<SetStateAction<AnimationItem | null>>;
  lottieJSON: LottieAnimation | null;
  setLottieJSON: Dispatch<SetStateAction<LottieAnimation | null>>;
  selectedLayer: LayerInfo | null;
  updateLayer: (newLayer: LayerInfo) => void;
  selectedColor: SelectedColor | null;
  setSelectedColor: Dispatch<SetStateAction<SelectedColor | null>>;
  isAnimationCreated: boolean;
  setIsAnimationCreated: Dispatch<SetStateAction<boolean>>;
  isUnsaved: boolean;
  setIsUnsaved: Dispatch<SetStateAction<boolean>>;
}>({
  lottiePlayerRef: null,
  setLottiePlayerRef: () => null,
  lottieJSON: null,
  setLottieJSON: () => null,
  selectedLayer: null,
  updateLayer: () => null,
  selectedColor: null,
  setSelectedColor: () => null,
  isAnimationCreated: false,
  setIsAnimationCreated: () => null,
  isUnsaved: false,
  setIsUnsaved: () => null,
});

export const SharedPropsContext = ({ children }: { children: React.ReactNode }) => {
  // Lottie Animation JSON
  const [lottieJSON, setLottieJSON] = useState<LottieAnimation | null>(null);

  // Keeps a reference of the lottie player
  const [lottiePlayerRef, setLottiePlayerRef] = React.useState<AnimationItem | null>(null);

  // Selected layer helps shows relevant colors from that layer
  const [selectedLayer, setSelectedLayer] = useState<LayerInfo | null>(null);

  // Selected color helps shows the color picker
  const [selectedColor, setSelectedColor] = useState<SelectedColor | null>(null);

  // This is only true when an animation is just imported
  const [isAnimationCreated, setIsAnimationCreated] = useState(false);

  // This is only true when the app has unsaved changes
  const [isUnsaved, setIsUnsaved] = useState(false);

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
        isAnimationCreated,
        setIsAnimationCreated,
        isUnsaved,
        setIsUnsaved,
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
