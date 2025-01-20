import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../UseAuth/useAuth";

function PrivateRoute({ children }) {
  const { loading, user } = useAuth();
  const location = useLocation();
  console.log(loading)

  
  if (loading) {
    return <h1> Loading ..  </h1>
    // return <Loading/>;
  }
  

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute;
