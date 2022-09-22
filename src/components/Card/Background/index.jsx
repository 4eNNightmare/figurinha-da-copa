import styles from "./styles.module.css";

import c from "classnames";
import { useMemo } from "react";

export default function Background({ color1, color2 }) {
  const variables = useMemo(() => {
    return {
      "--bg-color-1": color1,
      "--bg-color-2": color2
    };
  }, [color1, color2]);

  return (
    <div className={c(styles.background)} style={variables}>
      <div className={c(styles.gradient, styles.topLeft)} />
      <div className={c(styles.gradient, styles.topRight)} />
      <div className={c(styles.gradient, styles.bottomLeft)} />
      <div className={c(styles.gradient, styles.bottomRight)} />
    </div>
  );
}
