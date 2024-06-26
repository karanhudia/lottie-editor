import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorItems } from './ColorItems';
import { aColorPayload, LottieAnimation } from '../graphql/lottie-server/generated';
import { getAnimationLayersInfo } from '../utils/lottie';
import { mockLottieAnimation } from '../test/mocks/mockLottieAnimation';

// Mock SelectableColorItem component
jest.mock('./SelectableColorItem', () => ({
  SelectableColorItem: ({ id, onSelect }: { id: string; onSelect: (color: any) => void }) => (
    <div
      data-testid={id} // Use data-testid for testing purposes
      onClick={() => onSelect({ r: 255, g: 0, b: 0, a: 1 })} // Simulate click action
    >
      {id}
    </div>
  ),
}));

describe('ColorItems', () => {
  const handleColorSelectMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SelectableColorItem components for each shape', () => {
    const { getByTestId } = render(
      <ColorItems
        allLayers={getAnimationLayersInfo(mockLottieAnimation as unknown as LottieAnimation)}
        selectedColor={aColorPayload()}
        handleColorSelect={handleColorSelectMock}
      />,
    );

    // Verify that each SelectableColorItem is rendered with the correct id
    expect(getByTestId('nestedLayer-2,0,shape-0,shapeItem-1')).toBeInTheDocument();
    expect(getByTestId('nestedLayer-2,0,shape-3,shapeItem-1')).toBeInTheDocument();
    expect(getByTestId('nestedLayer-0,shape-0,shapeItem-1')).toBeInTheDocument();
  });

  it('calls handleColorSelect with the correct parameters when a SelectableColorItem is clicked', () => {
    const { getByTestId } = render(
      <ColorItems
        allLayers={getAnimationLayersInfo(mockLottieAnimation as unknown as LottieAnimation)}
        selectedColor={aColorPayload()}
        handleColorSelect={handleColorSelectMock}
      />,
    );

    // Simulate click on a SelectableColorItem
    fireEvent.click(getByTestId('nestedLayer-0,shape-0,shapeItem-1'));

    // Verify that handleColorSelect was called with the correct parameters
    expect(handleColorSelectMock).toHaveBeenCalledWith(
      { r: 255, g: 0, b: 0, a: 1 }, // Expected color from the mocked SelectableColorItem onClick
      { shapeSeq: 0, shapeName: 'Group 1', shapeItemSeq: 1, color: [0, 0.2824, 0.4157] }, // shapeInfo of the clicked item
      [0], // nestedLayerSeq of the clicked item
    );
  });
});
