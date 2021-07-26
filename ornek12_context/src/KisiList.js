import React, { useContext } from "react";
import Kisi from "./Kisi";
import { KisilerContext } from "./context/KisilerContext";

const KisiList = (props) => {
  // Props Destructring
  // const { kisiler, renkDegistir } = props;
  // const { kisiler } = props;

  // Context'i useContext hook'u ile okuduk.
  const context = useContext(KisilerContext);

  // Okuduğumuz context'teki kisiler metodunu destr. yaptık
  const { kisiler } = context;

  return (
    <div>
      <h2>Kisi Listesi</h2>
      {kisiler.map((kisi) => (
        // <Kisi key={kisi.id} kisi={kisi} renkDegistir={renkDegistir} />
        <Kisi key={kisi.id} kisi={kisi} />
      ))}
    </div>
  );
};

export default KisiList;
