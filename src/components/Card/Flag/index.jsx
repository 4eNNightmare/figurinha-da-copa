import c from "classnames";
import { useMemo } from "react";
import { text, flag, container } from "./styles.module.css";

export default function Flag({ code = "BRA" }) {
  const variables = useMemo(() => {
    return { "--flag-url": `url("https://countryflagsapi.com/png/${code}")` };
  }, [code]);

  return (
    <div className={c(container)} style={variables}>
      <div className={c(text)}>{code}</div>
      <div className={c(flag)} />
    </div>
  );
}
