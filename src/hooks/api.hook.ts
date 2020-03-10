import { ThunkCreator } from "easy-peasy";
import { useCallback } from "react";

export const useFetch = (fetch: ThunkCreator<void, any>): (() => void) => {
  const fetchCallback = useCallback(() => {
    fetch();
  }, [fetch]);

  return fetchCallback;
};
