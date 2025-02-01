import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./utils/auth"; // Your utility function

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
