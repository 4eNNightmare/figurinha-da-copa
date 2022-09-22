import c from "classnames";
import styles from "./styles.module.css";

export default function Date({ date }) {
  return (
    <div className={c(styles.container)}>
      <div className={c(styles.text)}>{date}</div>
    </div>
  );
}
