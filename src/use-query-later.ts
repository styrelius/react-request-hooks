import { useState, useEffect } from 'react';
import axios from 'axios';

type Data = any;

type RequestState = {
  isLoading: boolean;
  isSuccessful: boolean;
  hasError: boolean;
  data: Data;
};

type ReturnValue = [RequestState, () => void];

export const useQueryLater = (url: string): ReturnValue => {
  const [isMakingRequest, setIsMakingRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<Data>(null);

  const executeQuery = () => {
    if (isSuccessful) {
      setIsSuccessful(false);
    }
    if (hasError) {
      setHasError(false);
    }
    setData(null);
    setIsMakingRequest(true);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (isMakingRequest) {
      setIsLoading(true);

      axios
        .get(url, {
          cancelToken: source.token,
        })
        .then(({ data }) => {
          setIsMakingRequest(false);
          setIsLoading(false);
          setData(data);
          setIsSuccessful(true);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return err;
          }
          setIsMakingRequest(false);
          setIsLoading(false);
          setHasError(true);
        });
    }

    return () => source.cancel();
  }, [isMakingRequest, url]);

  return [{ isLoading, isSuccessful, hasError, data }, executeQuery];
};
