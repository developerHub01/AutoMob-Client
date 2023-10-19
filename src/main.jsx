import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/Router.jsx";
import AuthProvider from "./Context/AuthProvider";
import LoadingProvider from "./Context/LoadingProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoadingProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </LoadingProvider>
  </React.StrictMode>
);
