import {
  background,
  gradient,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
} from "./styles.module.css";

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
    <div className={c(background)} style={variables}>
      <div className={c(gradient, topLeft)} />
      <div className={c(gradient, topRight)} />
      <div className={c(gradient, bottomLeft)} />
      <div className={c(gradient, bottomRight)} />
    </div>
  );
}
