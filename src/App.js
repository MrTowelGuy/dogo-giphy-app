import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Fetchbutton";
import Gifs from "./components/Gifs";

export default function App() {
  const [gifSrc, setGifSrc] = useState({});

  const handleSubmit = async () => {
    const gifSrc = "https://dog.ceo/api/breeds/image/random";

    const response = await fetch(gifSrc);
    const data = await response.json();
    setGifSrc(data);
  };

  return (
    <div className="App">
      <h1>Dog Photo App</h1>
      <Button handleSubmitFromApp={handleSubmit} />
      {}
      {gifSrc.image_url ? (
        <Gifs gifSrc={gifSrc} />
      ) : (
        <h2>Let's see your pupper!</h2>
      )}
    </div>
  );
}
