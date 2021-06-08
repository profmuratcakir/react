import React from "react";
import "./Saat.css";

function Saat() {
  const tarih = new Date();
  const saatString = tarih.toLocaleTimeString();
  const tarihString = tarih.toLocaleDateString();
  const suAnkiSaat = tarih.getHours();
  let mesaj;

  const mesajStil = {
    color: "",
  };

  if (suAnkiSaat < 12) {
    mesaj = "Gunaydin";
    mesajStil.color = "green";
  } else if (suAnkiSaat < 18) {
    mesaj = "Tunaydin";
    mesajStil.color = "blue";
  } else {
    mesaj = "Iyi Geceler";
    mesajStil.color = "red";
  }

  return (
    <div className="div">
      <h1 className="tarih">TARIH:{tarihString}</h1>
      <h2 className="saat">SAAT:{saatString}</h2>
      <h2 style={mesajStil}>{mesaj}</h2>
      <img
        className="resim"
        src="https://images.pexels.com/photos/1198264/pexels-photo-1198264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
}

export default Saat;
