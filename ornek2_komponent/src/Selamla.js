// ? React'da JSX olarak adlandirilan bir soz dizimi kullanilir.
// ? Bu soz dizimi JS'ye benzese de bazi farkliliklari vardir.
// ? Icersinde dogrudan HTML kodu kullanilabilir.

// ! Komponentler tanimlanirken tek bir Element (div, section, article v.b)ile sarmalanarak dondurulmelidir.

// * Komponent iciresinde inline stillendirme yapilabilir.
// * Stillendirmede yazim key-value seklindedir.
// * Ayrica key isimlerinde JS'de oldugu gibi camelCase kullanilir.

// * Stillendirme bir degisen olarak da tanimlanabilir ve istenildiginde kullanilabilir.
const pStil = {
  color: "purple",
  marginTop: "40px",
  fontFamily: "Tahoma",
  border: "2px solid blue",
};

function Selamla() {
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "grey" }}>
        React Dersimize Hosgeldiniz..
      </h1>
      <p style={pStil}>Bu dersimizde React Komponentlerini Taniyacagiz.</p>
    </div>
  );
}

export default Selamla;
