import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const PrivateRoute = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return null; 

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
