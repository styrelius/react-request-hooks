import { useState, useEffect } from 'react';
import axios from 'axios';

type Data = any;

type ReturnValue = {
  isLoading: boolean;
  isSuccessful: boolean;
  hasError: boolean;
  data: Data;
};

export const useQuery = (url: string): ReturnValue => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<Data>(null);

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
