import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: {},
  });

  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4000/auth/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    const result = await axios.post("http://localhost:4000/auth/login", data);
    const token = result.data.token;
    localStorage.setItem("token", token);
    const dataToken = jwtDecode(token);
    setState({ ...state, user: dataToken });
    localStorage.setItem("name", dataToken.name); // ใช้อันนี้แล้ว user name บน nav ไม่หายตอน refresh
    localStorage.setItem("role", dataToken.role);
    if (dataToken.role === "admin") {
      navigate("/category-dashboard");
    } else {
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null, error: null });
    localStorage.removeItem("name"); // ลบข้อมูล user name ออกตอน logout
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated}}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
