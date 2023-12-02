import { useState, useEffect } from "react";

export const useJsonFetch = (url: string) => {
  const [ data, setData ] = useState({status: ""});
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ hasError, setError ] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setError(null);

      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return [ {data, isLoading, hasError} ];
}
