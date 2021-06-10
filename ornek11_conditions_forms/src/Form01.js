import React, { useState } from "react";
import "./Form.css";

function Form01() {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [mesaj, setMesaj] = useState("");

  function adGuncelle(event) {
    setAd(event.target.value);
  }
  function soyadGuncelle(event) {
    setSoyad(event.target.value);
  }
  function mesajGuncelle(event) {
    setMesaj(event.target.value);
  }

  return (
    <div className="alan">
      {ad && (
        <h1>
          Merhaba {ad} {soyad}
        </h1>
      )}
      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required
          onChange={adGuncelle}
          value={ad}
        />
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="soyad"
          required
          onChange={soyadGuncelle}
          value={soyad}
        />
        <textarea
          className="input"
          name="mesaj"
          id=""
          cols="30"
          rows="10"
          value={mesaj}
          onChange={mesajGuncelle}
        ></textarea>

        <button type="submit">Gonder</button>
      </form>
    </div>
  );
}

export default Form01;
