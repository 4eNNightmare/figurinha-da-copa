import c from "classnames";
import { useMemo } from "react";
import styles from "./styles.module.css";

export default function Flag({ code = "BRA" }) {
  const variables = useMemo(() => {
    return { "--flag-url": `url("https://countryflagsapi.com/png/${code}")` };
  }, [code]);

  return (
    <div className={c(styles.container)} style={variables}>
      <div className={c(styles.text)}>{code}</div>
      <div className={c(styles.flag)} />
    </div>
  );
}
