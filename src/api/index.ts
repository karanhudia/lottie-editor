const handleFetchError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${String(response.status)}: ${response.statusText}`);
  }
};

export const fetchAsyncJsonApi = async <T>(url: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(url, init);

  handleFetchError(response);

  return (await response.json()) as T;
};
