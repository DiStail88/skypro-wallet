import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import AnalisisPage from "../../pages/AnalisisPage/AnalisisPage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/analisis"
        element={
          <PrivateRoute>
            <AnalisisPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
