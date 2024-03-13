import { createContext, useState } from "react";
import { api } from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      toast.error("Email ou Senha incorretos.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const userRegister = async (formData) => {
    try {
      const { confirmPassword, ...rest } = formData;
      const { data } = await api.post("/users", rest);
      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
        localStorage.removeItem("@KenzieHub:Token");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        userAutoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
