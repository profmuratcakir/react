import React, { useContext } from "react";
import { KisilerContext } from "./context/KisilerContext";

const Kisi = (props) => {
  // const { kisi, renkDegistir } = props;
  const { kisi } = props;
  const { isim, yas, id, renk, email } = kisi;

  // Context'i useContext hook'u ile okuduk.
  const context = useContext(KisilerContext);

  // Okuduğumuz context'teki renkDegistir metodunu destr. yaptık
  const { renkDegistir } = context;

  return (
    <div style={{ background: renk }}>
      <h3>{isim}</h3>
      <p>Email: {email}</p>
      <p>Yas: {yas}</p>
      <p>Renk:</p>
      <input
        type="text"
        value={renk}
        onChange={(e) => renkDegistir(id, e.target.value)}
      />
    </div>
  );
};

export default Kisi;
