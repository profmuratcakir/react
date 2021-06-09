import React, { useState, useEffect } from "react";
import textDosya from "./yazi.txt";

//! Fetch API ile harici bir txt dosyasini okumak da mumkundur.

function UseEffectFetchTxt() {
  const [yazi, setYazi] = useState("");
  useEffect(() => {
    fetch(textDosya)
      .then((cevap) => cevap.text())
      .then((data) => setYazi(data));
  }, []);
  console.log(yazi);
  return (
    <div>
      <h1>{yazi}</h1>
    </div>
  );
}

export default UseEffectFetchTxt;
