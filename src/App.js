import { useCallback, useState } from "react";
import Card from "./components/Card";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("Paulo H. A. Leite");
  const [date, setDate] = useState("13-4-1991");
  const [code, setCode] = useState("BRA");
  const [color1, setColor1] = useState("#5a31a0");
  const [color2, setColor2] = useState("#3eda8a");
  const [year, setYear] = useState(2022);
  const [height, setHeight] = useState(1.8);
  const [weight, setWeight] = useState(77);
  const [photoUrl, setPhotoUrl] = useState(
    "https://lh3.googleusercontent.com/drive-viewer/AJc5JmQ9vD5ISwVoOLTpZ-GFgkEMDNOItDAh5LeK7bL_rP1PCQsvh07ypNnC8Yme-MpIIP33shetO_A=w2560-h1272"
  );

  const handleDownload = useCallback(async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("card"));
    download(dataUrl, "figure.png");
  }, []);

  return (
    <div className="App">
      <Card
        id="card"
        name={name}
        code={code}
        color1={color1}
        color2={color2}
        photoUrl={photoUrl}
        year={year}
        date={date}
        height={height}
        weight={weight}
      />

      <div className="Inputs">
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Country (Code): </label>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Year: </label>
          <input
            type="number"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            type="number"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Photo URL: </label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Color1: </label>
          <input
            type="color"
            value={color1}
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Color2: </label>
          <input
            type="color"
            value={color2}
            onChange={(e) => {
              setColor2(e.target.value);
            }}
          />
        </div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
