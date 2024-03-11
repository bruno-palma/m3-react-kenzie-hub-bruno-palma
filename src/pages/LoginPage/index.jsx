import LogoKenzieHub from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <header>
        <img src={LogoKenzieHub} alt="Logo Kenzie Hub" />
      </header>
      <main>
        <div>
          <h2>Login</h2>
          <LoginForm />
          <div>
            <h4>Ainda não possui uma conta?</h4>
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </div>
      </main>
    </>
  );
};
