import LogoKenzieHub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";

export const LoginPage = () => {
  const { userAutoLogin } = useContext(UserContext);

  useEffect(() => {
    userAutoLogin();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
        </header>
        <main className={styles.main}>
          <div className={styles.info}>
            <h2>Login</h2>
            <LoginForm />
            <div className={styles.content}>
              <h4>Ainda não possui uma conta?</h4>
              <Link className={styles.link} to={"/register"}>
                Cadastre-se
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
