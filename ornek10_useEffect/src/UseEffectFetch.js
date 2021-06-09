import React from "react";
import { useState, useEffect } from "react";

function UseEffectFetch() {
  const [ulkeler, setUlkeler] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data));
    // .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center mt-5">
      <h1 className="bg-warning">ULKE BILGILERİ</h1>
      {ulkeler.map((ulke) => {
        return (
          <div key={ulke.id}>
            <img src={ulke.flag} alt="" width="50%" />
            <h2>{ulke.name}</h2>
            <p>{ulke.capital}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectFetch;
