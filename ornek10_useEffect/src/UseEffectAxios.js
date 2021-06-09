import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

//!- axios harici kaynaklardan verileri alabilmemize olanak
//!  saglayan bir kutuphanedir.
//!- En buyuk avantaji, kullanimin kolay ve  eski tarayicilar
//!  ile de uyumlu olmasidir.

function UseEffectAxios() {
  const [kisiler, setKisiler] = useState([]);

  //?axios alinan verileri otomatik olarak JSON'a donusturulur.
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setKisiler(res.data)
    );
  }, []);

  const yeniKisi = {
    name: "Can",
    email: "can@gmail.com",
    phone: +902323234555,
  };

  //?- axios ile post islemi (API veri gonderme) fetch api'ye oranla
  //?  cok daha kolaydir.
  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", yeniKisi)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="container text-center mt-4">
      {kisiler.map((kisi) => {
        const { id, name, email, phone } = kisi;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectAxios;
