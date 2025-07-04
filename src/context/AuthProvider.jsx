import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    } finally {
      setLoading(false);
    }
  }, []);

const login = (loginData) => {
  setUser(loginData);
  localStorage.setItem("userInfo", JSON.stringify(loginData));
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  const isAuth = !!user?.token;

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
