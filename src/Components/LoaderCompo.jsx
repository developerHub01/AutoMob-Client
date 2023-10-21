import React, { useContext } from "react";
import { LoadingContext } from "../Context/LoadingProvider";
import { AuthContext } from "../Context/AuthProvider";

const loadingAnim = "https://i.ibb.co/3BcZJtm/output-onlinegiftools.gif";

const LoaderCompo = () => {
  const { isLoading } = useContext(LoadingContext);
  const { authLoading } = useContext(AuthContext);
  return (
    <>
      {isLoading && authLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen grid place-content-center bg-white/80 z-50 select-none">
          <img
            src={loadingAnim}
            alt="Loader"
            className="max-w-[600px] max-h-[600px] w-full h-full object-contain"
          />
          <h3 className="text-center text-4xl font-bold text-gray-900">
            Loading...
          </h3>
        </div>
      )}
    </>
  );
};

export default LoaderCompo;
