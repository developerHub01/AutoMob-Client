import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext);

  if (authLoading || user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
