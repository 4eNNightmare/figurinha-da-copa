import c from "classnames";
import { container, text } from "./styles.module.css";

export default function Date({ date }) {
  return (
    <div className={c(container)}>
      <div className={c(text)}>{date}</div>
    </div>
  );
}
