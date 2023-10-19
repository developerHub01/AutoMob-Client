import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import MyCart from "../Pages/MyCart";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/mycart",
        element: <MyCart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
