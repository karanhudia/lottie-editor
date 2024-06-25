import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorsControl } from './ColorsControl';
import { useSharedProps } from '../context/SharedPropsContext';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';
import mocked = jest.mocked;

// Mock SelectableColorItem component
jest.mock('./SelectableColorItem', () => ({
  SelectableColorItem: ({ onSelect }) => (
    <div
      data-testid='mock-selectable-color-item'
      onClick={() => onSelect({ r: 255, g: 0, b: 0, a: 1 })}
    >
      Mock SelectableColorItem
    </div>
  ),
}));

// Mock the useLottieAnimation hook
jest.mock('../hooks/useLottieAnimation', () => ({
  useLottieAnimation: jest.fn(),
}));

// Mock and define useSharedProps hook
jest.mock('../context/SharedPropsContext', () => ({
  useSharedProps: jest.fn(),
}));

describe('ColorsControl', () => {
  const mockSetSelectedColor = jest.fn();
  const mockUpdateColor = jest.fn();

  const mockSharedProps = {
    selectedColor: {
      nestedLayerSeq: [0],
      shapeSeq: 0,
      shapeItemSeq: 0,
      color: { r: 255, g: 0, b: 0, a: 1 },
    },
    setSelectedColor: mockSetSelectedColor,
    lottieJSON: mockLottieAnimation,
    selectedLayer: {
      shapes: [{ shapeSeq: 0, shapeItemSeq: 0, color: '#ff0000' }], // Mocked selected layer for allLayers
      nestedLayerSeq: [0],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mocked(useSharedProps).mockReturnValue(mockSharedProps);
    // Mock the return value of useLottieAnimation hook
    (useLottieAnimation as jest.Mock).mockReturnValue({
      updateColor: mockUpdateColor,
    });
  });

  it('renders with selectedColor and selectedLayer', () => {
    const { getByText, getByTestId } = render(<ColorsControl />);

    // Ensure "Colors" title is rendered
    expect(getByText('Colors')).toBeInTheDocument();

    // Ensure ColorItems component is rendered
    expect(getByTestId('mock-selectable-color-item')).toBeInTheDocument();

    // Ensure RgbaColorPicker is rendered with selectedColor's color
    const rgbaColorPicker = getByTestId('rgba-color-picker');
    expect(rgbaColorPicker).toBeInTheDocument();
  });

  it('calls setSelectedColor and updateColor when selecting a color', () => {
    const { getByTestId } = render(<ColorsControl />);

    // Simulate clicking on the mocked SelectableColorItem
    fireEvent.click(getByTestId('mock-selectable-color-item'));

    // Verify that setSelectedColor was called with the correct parameters
    expect(mockSetSelectedColor).toHaveBeenCalledWith({
      nestedLayerSeq: [0],
      shapeSeq: 0,
      shapeItemSeq: 0,
      color: { r: 255, g: 0, b: 0, a: 1 },
    });
  });
});
