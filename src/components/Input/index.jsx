import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.div}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} ref={ref} {...rest} />
      {error ? <p className={styles.text}>{error.message}</p> : null}
    </div>
  );
});
