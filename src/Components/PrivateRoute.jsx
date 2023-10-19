import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { LoadingContext } from "../Context/LoadingProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { isLoading } = useContext(LoadingContext);

  if (!user || isLoading) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
