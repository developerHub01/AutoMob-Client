import React, { createContext, useState } from "react";

export const LoadingContext = createContext(null);

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const loadingState = {
    isLoading,
    setIsLoading,
  };

  if (isLoading) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <LoadingContext.Provider value={loadingState}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
