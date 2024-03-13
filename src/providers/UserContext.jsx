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

  const userAutoLogin = async () => {
    const token = localStorage.getItem("@KenzieHub:Token");
    if (token) {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@KenzieHub:Token");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userRegister, userLogout, userAutoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};
