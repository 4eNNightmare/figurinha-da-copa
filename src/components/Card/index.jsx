import Background from "./Background";
import Photo from "./Photo";
import c from "classnames";
import styles from "./styles.module.css";
import FifaLogo from "./FifaLogo";
import Flag from "./Flag";
import Name from "./Name";
import Field from "./Field";
import Year from "./Year";
import Date from "./Date";
import Height from "./Height";
import Weight from "./Weight";

export default function Card({
  id,
  color1,
  color2,
  code,
  name,
  photoUrl,
  year,
  date,
  height,
  weight
}) {
  return (
    <div id={id} className={c(styles.card)}>
      <Background color1={color1} color2={color2} />
      <Photo photoUrl={photoUrl} />
      <Flag code={code} />
      <FifaLogo />
      <Name name={name} />
      <Field />
      <Year year={year} />
      <Date date={date} />
      <Height height={height} />
      <Weight weight={weight} />
    </div>
  );
}
