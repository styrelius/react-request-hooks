import { useState, useEffect } from 'react';
import axios from 'axios';

type requestParams = {
  method: 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: any;
  headers?: Record<string, any>;
  urlParams?: Record<string, any>;
};

type Data = any;

type RequestState = {
  isLoading: boolean;
  isSuccessful: boolean;
  hasError: boolean;
  data: Data;
};

type ReturnValue = [RequestState, () => void];

export const useMutation = ({
  method,
  url,
  data: reqData,
  headers,
  urlParams,
}: requestParams): ReturnValue => {
  const [shouldMakeRequest, setShouldMakeRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [data, setData] = useState<Data>(null);

  const executeMutation = () => {
    setIsSuccessful(false);
    setHasError(false);
    setData(null);
    setShouldMakeRequest(true);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (shouldMakeRequest) {
      setIsLoading(true);

      axios({
        method,
        url,
        data: reqData,
        params: urlParams,
        cancelToken: source.token,
        headers,
      })
        .then(({ data }) => {
          setShouldMakeRequest(false);
          setIsLoading(false);
          setData(data);
          setIsSuccessful(true);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return err;
          }
          setShouldMakeRequest(false);
          setIsLoading(false);
          setHasError(true);
        });
    }

    return () => source.cancel();
  }, [shouldMakeRequest, method, url, reqData, urlParams, headers]);

  return [{ isLoading, hasError, isSuccessful, data }, executeMutation];
};
