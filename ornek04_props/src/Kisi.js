import React from "react";
import Mesaj from "./Mesaj";

function Kisi(props) {
  return (
    <div>
      <Mesaj ad={props.ad} />
      <h2>{props.ad}</h2>
      <img src={props.resim} alt="" />
      <p>Tel: {props.tel}</p>
    </div>
  );
}

export default Kisi;
