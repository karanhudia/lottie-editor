import { fetchAsyncJsonApi } from './index';

describe('fetchAsyncJsonApi', () => {
  beforeEach(() => {
    // Mock the global fetch function
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'Test Data' };
    const mockResponse = {
      ok: true,
      status: 200,
      statusText: 'OK',
      json: jest.fn().mockResolvedValue(mockData),
    };

    // Mock the fetch function to return a resolved promise with mockResponse
    (global.fetch as jest.Mock).mockResolvedValueOnce(mockResponse);

    const url = 'https://example.com/api/data';
    const data = await fetchAsyncJsonApi(url);

    expect(global.fetch).toHaveBeenCalledWith(url, undefined);
    expect(data).toEqual(mockData);
  });

  it('should throw an error on failed fetch', async () => {
    const mockErrorResponse = {
      ok: false,
      status: 404,
      statusText: 'Not Found',
    };

    // Mock the fetch function to return a rejected promise with mockErrorResponse
    (global.fetch as jest.Mock).mockResolvedValueOnce(mockErrorResponse);

    const url = 'https://example.com/api/data';

    try {
      await fetchAsyncJsonApi(url);
      // If fetchAsyncJsonApi did not throw an error, fail the test
      expect(true).toBe(false); // This line should not be reached
    } catch (error) {
      expect(error.message).toBe('404: Not Found');
    }

    expect(global.fetch).toHaveBeenCalledWith(url, undefined);
  });
});
