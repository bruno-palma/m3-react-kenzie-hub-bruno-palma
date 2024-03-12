import LogoKenzieHub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <header>
        <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
        <Link to={"/"}>Voltar</Link>
      </header>
      <main>
        <div>
          <h2>Crie sua conta</h2>
          <h4>Rápido e grátis, vamos nessa...</h4>
          <RegisterForm />
        </div>
      </main>
    </>
  );
};
