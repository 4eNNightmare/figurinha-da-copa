import c from "classnames";
import styles from "./styles.module.css";

export default function Year({ year }) {
  return (
    <div className={c(styles.container)}>
      <div className={c(styles.text)}>{year}</div>
    </div>
  );
}
