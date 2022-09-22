import c from "classnames";
import styles from "./styles.module.css";

export default function Name({ name }) {
  return (
    <div className={c(styles.container)}>
      <div className={c(styles.text)}>{name}</div>
      <Decoration className={c(styles.decorationLeft)} />
      <Decoration className={c(styles.decorationRight)} />
    </div>
  );
}

function Decoration({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="35"
      viewBox="0 0 17 35"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_1_6)">
        <rect x="10" y="5" width="7" height="18" fill="#BFBAAE" />
        <rect y="11" width="10" height="7" fill="#BFBAAE" />
        <rect x="5" width="5" height="5" fill="#BFBAAE" />
        <rect x="5" y="23" width="5" height="5" fill="#BFBAAE" />
      </g>
      <defs>
        <filter
          id="filter0_d_1_6"
          x="0"
          y="0"
          width="17"
          height="35"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
