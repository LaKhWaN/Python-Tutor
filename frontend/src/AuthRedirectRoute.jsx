import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./utils/auth"; // Your utility function

const AuthRedirectRoute = ({ element, ...rest }) => {
  return !isAuthenticated() ? element : <Navigate to="/topics" replace />;
};

export default AuthRedirectRoute;
