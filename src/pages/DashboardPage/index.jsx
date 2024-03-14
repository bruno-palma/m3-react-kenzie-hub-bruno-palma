import LogoKenzieHub from "../../assets/Logo.svg";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import styles from "./styles.module.scss";

export const DashboardPage = () => {
  const { user, userLogout, userAutoLogin } = useContext(UserContext);

  useEffect(() => {
    userAutoLogin();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
        <button className={styles.button} onClick={userLogout}>
          Sair
        </button>
      </header>
      <main>
        <section className={styles.info}>
          <div>
            {user ? <h2>Olá, {user.name}</h2> : null}
            {user ? <h4>{user.course_module}</h4> : null}
          </div>
        </section>
        <section className={styles.content}>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <h3>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </section>
      </main>
    </>
  );
};
