import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const RegisterForm = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  const { register, handleSubmit } = useForm();

  //   Adicionar o errors nos inputs vindo do useForm

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"Nome"}
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
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
      <Input
        label={"Confirmar Senha"}
        type="password"
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
      />
      <Input
        label={"Bio"}
        type="text"
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <Input
        label={"Contato"}
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />
      <label>Selecionar Módulo</label>
      <select {...register("course_module")}>
        <option value="">Selecione seu módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo Módulo (Frontend avançado)">
          Segundo Módulo (Frontend avançado)
        </option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
