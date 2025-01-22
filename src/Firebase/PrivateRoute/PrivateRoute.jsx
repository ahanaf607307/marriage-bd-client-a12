import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { AuthContext } from "../AuthProvider/AuthProvider";

function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
console.log('user private route' , user )
  console.log('private route ----> ',loading)

  
  if (loading) {
    return <Loading/>;
  }
  

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute;
