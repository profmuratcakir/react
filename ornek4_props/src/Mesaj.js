import React from "react";

function Mesaj(props) {
  console.log(props.ad);
  return (
    <div>
      <h1>Ben {props.ad}</h1>
    </div>
  );
}

export default Mesaj;
