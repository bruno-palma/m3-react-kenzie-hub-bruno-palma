import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  //   Adicionar o errors nos inputs vindo do useForm

  return (
    <form onSubmit={handleSubmit(userLogin)}>
      <Input
        label={"Email"}
        type="text"
        error={errors.email}
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Input
        label={"Senha"}
        type="password"
        error={errors.password}
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
