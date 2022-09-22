import c from "classnames";
import { useMemo } from "react";
import { container, photo } from "./styles.module.css";

export default function Photo({ photoUrl }) {
  const variables = useMemo(() => {
    return {
      "--photo-url": `url(${photoUrl})`
    };
  }, [photoUrl]);

  return (
    <div className={c(container)} style={variables}>
      <div className={c(photo)} />
    </div>
  );
}
