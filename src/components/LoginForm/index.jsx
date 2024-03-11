import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const LoginForm = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  const { register, handleSubmit } = useForm();

  //   Adicionar o errors nos inputs vindo do useForm

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"Email"}
        type="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <Input
        label={"Senha"}
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
