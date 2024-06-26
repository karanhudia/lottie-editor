import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorsControl } from './ColorsControl';
import { useSharedProps } from '../context/SharedPropsContext';
import { useLottieAnimation } from '../hooks/useLottieAnimation';
import { mockSetSelectedColor, mockSharedContextProps } from '../test/mocks/mockSharedContextProps';
import { RgbaColor } from 'react-colorful';
import mocked = jest.mocked;

// Mock SelectableColorItem component
jest.mock('./SelectableColorItem', () => ({
  SelectableColorItem: ({ onSelect }: { onSelect: (color: RgbaColor) => void }) => (
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
  const mockUpdateColor = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mocked(useSharedProps).mockReturnValue(mockSharedContextProps);
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
      color: [1, 0, 0, 1],
      layer: [2, 0],
      shape: 0,
      shapeItem: 1,
    });
  });
});
