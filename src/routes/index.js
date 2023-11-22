import React from "react";
import Layout from "./Layout";
import Login from "../pages/login";
import ForgotPassword from "../pages/forgot-password";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";

const Routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/",
    element: Layout(Dashboard),
  },
  {
    path: "/profile",
    element: Layout(Profile),
  },
];

export default Routes;
