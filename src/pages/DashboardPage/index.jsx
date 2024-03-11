import { Link } from "react-router-dom";
import LogoKenzieHub from "../../assets/Logo.svg";

export const DashboardPage = () => {
  return (
    <>
      <header>
        <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
        <Link to={"/"}>Sair</Link>
      </header>
      <main>
        <section>
          <h1>Olá, Usuário</h1>
          <h4>Primeiro módulo (Introdução ao Frontend)</h4>
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
