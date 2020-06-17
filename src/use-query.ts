import { useState, useEffect } from 'react';
import axios from 'axios';

type UseQueryReturnValue = {
  isLoading: boolean;
  isSuccessful: boolean;
  hasError: boolean;
  data: any;
};

export const useQuery = (url: string): UseQueryReturnValue => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then(({ data }) => {
        setIsLoading(false);
        setData(data);
        setIsSuccessful(true);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return err;
        }
        setIsLoading(false);
        setHasError(true);
      });

    return () => source.cancel();
  }, [url]);

  return { isLoading, hasError, isSuccessful, data };
};
