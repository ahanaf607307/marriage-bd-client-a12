import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Loading/Loading";
import useAuth from "../UseAuth/useAuth";

function PrivateRoute({ children }) {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading/>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute;
