import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm.schema";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  return (
    <form onSubmit={handleSubmit(userRegister)}>
      <Input
        label={"Nome"}
        type="text"
        error={errors.name}
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
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
      <Input
        label={"Confirmar Senha"}
        type="password"
        error={errors.confirmPassword}
        placeholder="Digite novamente sua senha"
        {...register("confirmPassword")}
      />
      <Input
        label={"Bio"}
        type="text"
        error={errors.bio}
        placeholder="Fale sobre você"
        {...register("bio")}
      />
      <Input
        label={"Contato"}
        type="text"
        error={errors.contact}
        placeholder="Opção de contato"
        {...register("contact")}
      />
      <label>Selecionar Módulo</label>
      <select {...register("course_module")}>
        <option value="">Selecione seu módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro Módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo Módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro Módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto Módulo (Backend Avançado)
        </option>
      </select>
      {errors.course_module ? <p>{errors.course_module.message}</p> : null}
      <button type="submit">Cadastrar</button>
    </form>
  );
};
