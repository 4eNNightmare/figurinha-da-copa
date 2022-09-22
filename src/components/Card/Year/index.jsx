import c from "classnames";
import { container, text } from "./styles.module.css";

export default function Year({ year }) {
  return (
    <div className={c(container)}>
      <div className={c(text)}>{year}</div>
    </div>
  );
}
