import React, { useState } from "react";
import "../css/Form.css";

function Iletisim() {
  const [form, setForm] = useState({ ad: "", soyad: "", mesaj: "" });

  const { ad, soyad, mesaj } = form;
  console.log("FORM", form);

  function guncelle(event) {
    const { name, value } = event.target;
    setForm(() => {
      return {
        ...form,
        [name]: value,
      };
    });
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
          onChange={guncelle}
          value={ad}
        />
        <input
          className="input"
          type="text"
          placeholder="soyadiniz"
          name="soyad"
          required
          onChange={guncelle}
          value={soyad}
        />
        <textarea
          className="input"
          name="mesaj"
          id=""
          cols="30"
          rows="10"
          value={mesaj}
          onChange={guncelle}
        ></textarea>

        <button type="submit">Gonder</button>
      </form>
    </div>
  );
}

export default Iletisim;
