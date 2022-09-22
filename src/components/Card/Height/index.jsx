import c from "classnames";
import { useMemo } from "react";
import { container, text } from "./styles.module.css";

export default function Height({ height }) {
  const formattedText = useMemo(() => {
    return String(height).replace(".", ",").padEnd(4, "0");
  }, [height]);

  return (
    <div className={c(container)}>
      <HeightSVG />
      <div className={c(text)}>{formattedText}</div>
    </div>
  );
}

function HeightSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="38"
      viewBox="0 0 28 38"
      fill="none"
    >
      <circle cx="12" cy="8" r="3.5" stroke="white" />
      <path
        d="M8.50016 17.5C8.50016 17.5 8.50013 20.9081 8.50012 25M12.0002 35.5C11.8439 36.5935 11.0936 37.1562 10.0002 37C9.03366 36.8619 8.50017 36.3284 8.50016 35.5C8.50011 32.6976 8.50011 28.5862 8.50012 25M12.0002 35.5C12.0002 31.3995 12.0002 25 12.0002 25M12.0002 35.5C12.1564 36.5935 12.9067 37.1562 14.0002 37C14.9667 36.8619 15.5002 36.3284 15.5002 35.5C15.5002 29 15.5002 17.5 15.5002 17.5M8.50012 25C8.5001 25.8284 7.8285 26.5 7.00005 26.5C6.17162 26.5 5.50006 25.8284 5.50005 25C5.50002 22.5 5.50003 21 5.50005 17.5C5.50006 15.5474 6.54751 13.5 8.50016 13.5C10 13.5 12.0002 13.5 12.0002 13.5H15.5002C17.4528 13.5 18.5003 15.5474 18.5003 17.5V25C18.5003 25.8284 17.8287 26.5 17.0003 26.5C16.1718 26.5 15.5002 25.8284 15.5002 25"
        stroke="white"
        stroke-linecap="round"
      />
      <path
        d="M21 1H27V4M1 37H27V34M27 34H24M27 34V31M27 31H24M27 31V28M27 28H21M27 28V25M27 25H24M27 25V22M27 22H24M27 22V19M27 19H21M27 19V16M27 16H24M27 16V13M27 13H24M27 13V10M27 10H21M27 10V7M27 7H24M27 7V4M27 4H24"
        stroke="white"
        stroke-linecap="round"
      />
    </svg>
  );
}
