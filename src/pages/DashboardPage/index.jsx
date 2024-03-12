import LogoKenzieHub from "../../assets/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <>
      <header>
        <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
        <button onClick={userLogout}>Sair</button>
      </header>
      <main>
        <section>
          {user ? <h1>Olá, {user.name}</h1> : null}
          {user ? <h4>{user.course_module}</h4> : null}
        </section>
        <section>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <h2>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h2>
        </section>
      </main>
    </>
  );
};
