import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import styles from "./styles.module.scss";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const [isHidden, setIsHidden] = useState(true);

  const type = isHidden ? "password" : "text";

  return (
    <form onSubmit={handleSubmit(userLogin)}>
      <Input
        label={"Email"}
        type="text"
        error={errors.email}
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <div className={styles.div}>
        <Input
          label={"Senha"}
          type={type}
          error={errors.password}
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <button
          className={styles.eye}
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? (
            <FaRegEye size={17} color="#f8f9fa" />
          ) : (
            <FaRegEyeSlash size={17} color="#f8f9fa" />
          )}
        </button>
      </div>
      <button className="button-default" type="submit">
        Entrar
      </button>
    </form>
  );
};
