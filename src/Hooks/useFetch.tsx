import React, { useState } from 'react';

function useFetch<T>(link: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = React.useRef(options);

  React.useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);

        const response = await fetch(link, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok)
          throw new Error(`Erro na requisição: ${response.status}`);

        const json = (await response.json()) as T;

        if (!signal.aborted) {
          setData(json);
        }
      } catch (e) {
        if (!signal.aborted && e instanceof Error) setError(e.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [link]);

  return { data, loading, error };
}
export default useFetch;
