import LogoKenzieHub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";

export const RegisterPage = () => {
  const { userAutoLogin } = useContext(UserContext);

  useEffect(() => {
    userAutoLogin();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
          <Link className={styles.link} to={"/"}>
            Voltar
          </Link>
        </header>
        <main className={styles.main}>
          <div className={styles.info}>
            <h2>Crie sua conta</h2>
            <h4>Rápido e grátis, vamos nessa...</h4>
            <RegisterForm />
          </div>
        </main>
      </div>
    </>
  );
};
