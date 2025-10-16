import { createContext, useContext } from "react";

export const ApiContext = createContext(undefined);

export const useApi = () => {
  const provider = useContext(ApiContext);
  if (!provider) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return provider; // {info, isLoading, error, fetchData}
};
