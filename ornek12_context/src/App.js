import React, { useState } from "react";
import data from "./data";
import KisiList from "./KisiList";
import { KisilerContext } from "./context/KisilerContext";

function App() {
  const [kisiler, setKisiler] = useState(data);

  const renkDegistir = (id, renk) => {
    setKisiler(
      kisiler.map((kisi) => (kisi.id === id ? { ...kisi, renk: renk } : kisi))
    );
  };
  return (
    // Olusturduğumuz Context'in Provider'ı ile Tum komponentleri sarmaladik.
    // Bu sayede bütün komponentler contextte bulunan değişken v.b paylaşabilir.

    //Provider'ın value kısmına, Context'te paylaşmak istediklerimizi (fonksyon , değişken, state vb.) yazabiliriz.
    <KisilerContext.Provider value={{ kisiler, renkDegistir }}>
      <div>
        <header>
          <h1>Merhaba!</h1>
        </header>
        {/* <KisiList kisiler={kisiler} renkDegistir={renkDegistir} /> */}
        {/* <KisiList kisiler={kisiler} /> */}
        <KisiList />
      </div>
    </KisilerContext.Provider>
  );
}
export default App;
