import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ColorItems } from './ColorItems';

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
  const allLayersMock = [
    {
      shapes: [
        { shapeSeq: 0, shapeItemSeq: 0, color: '#ff0000' },
        { shapeSeq: 0, shapeItemSeq: 1, color: '#00ff00' },
      ],
      nestedLayerSeq: [0],
      layers: [
        {
          shapes: [{ shapeSeq: 1, shapeItemSeq: 0, color: '#0000ff' }],
          nestedLayerSeq: [0, 0],
        },
      ],
    },
  ];

  const selectedColorMock = {
    nestedLayerSeq: [0],
    shapeSeq: 0,
    shapeItemSeq: 0,
  };

  const handleColorSelectMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders SelectableColorItem components for each shape', () => {
    const { getByTestId } = render(
      <ColorItems
        allLayers={allLayersMock}
        selectedColor={selectedColorMock}
        handleColorSelect={handleColorSelectMock}
      />,
    );

    // Verify that each SelectableColorItem is rendered with the correct id
    expect(getByTestId('nestedLayer-0,0,shape-1,shapeItem-0')).toBeInTheDocument();
    expect(getByTestId('nestedLayer-0,shape-0,shapeItem-0')).toBeInTheDocument();
    expect(getByTestId('nestedLayer-0,shape-0,shapeItem-1')).toBeInTheDocument();
  });

  it('calls handleColorSelect with the correct parameters when a SelectableColorItem is clicked', () => {
    const { getByTestId } = render(
      <ColorItems
        allLayers={allLayersMock}
        selectedColor={selectedColorMock}
        handleColorSelect={handleColorSelectMock}
      />,
    );

    // Simulate click on a SelectableColorItem
    fireEvent.click(getByTestId('nestedLayer-0,shape-0,shapeItem-1'));

    // Verify that handleColorSelect was called with the correct parameters
    expect(handleColorSelectMock).toHaveBeenCalledWith(
      { r: 255, g: 0, b: 0, a: 1 }, // Expected color from the mocked SelectableColorItem onClick
      allLayersMock[0].shapes[1], // shapeInfo of the clicked item
      allLayersMock[0].nestedLayerSeq, // nestedLayerSeq of the clicked item
    );
  });

  // Add more tests as needed for different scenarios and edge cases
});
