/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useJsonFetch = (url, options) => {    // хук для fetch-запросов

  const [status, setStatus] = useState({
    loading: false, // маркер состояния загрузки
    data: undefined,
    error: undefined,
  });

  function setUrlFetch(url, options) {
    setStatus({ loading: true });
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setStatus({ loading: false, data: response.data });
      })
      .catch((error) => {   // перехват ошибки
        setStatus({ loading: false, error });
      });
  }

  useEffect(() => {
    if (url) {
      setUrlFetch(url, options);
    }
  }, []);

  return { ...status, setUrlFetch };
};
export default useJsonFetch;
