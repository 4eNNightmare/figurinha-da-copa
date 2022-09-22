import c from "classnames";
import { useMemo } from "react";
import styles from "./styles.module.css";

export default function Photo({ photoUrl }) {
  const variables = useMemo(() => {
    return {
      "--photo-url": `url(${photoUrl})`
    };
  }, [photoUrl]);

  return (
    <div className={c(styles.container)} style={variables}>
      <div className={c(styles.photo)} />
    </div>
  );
}
