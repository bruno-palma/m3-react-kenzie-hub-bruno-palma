import { createContext, useState } from "react";
import { api } from "../services";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@KenzieHub:Token", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (formData) => {
    try {
      const { confirmPassword, ...rest } = formData;
      const { data } = await api.post("/users", rest);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@KenzieHub:Token");
    setUser(null);
    navigate("/");
  };

  // Token localStorage
  // Função de autologin

  return (
    <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
