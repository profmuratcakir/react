import React from "react";
import logo from "./img/logo.png";

// * Varolan bir bootstrap uygulamasini React'e cevirmek icin yapılacak adimlar.
// ! 1. npm install bootstrap (package.json'a dependecny eklemek için)
// ! 2. index.html bootsrap.css lokal veya CDN (aşağıdaki gibi) eklenmelidir.

/* <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
  crossorigin="anonymous"
/>; */

// ! 3. style stillendirmesi var ise JSX formatina cevrilmeldir.
// ! 4. class isimleri className olarak çevirilse iyi olur.
// ! 5. Resimler lokalden geliyorsa dogrudan link verildiginde calismayabilir.
// ! Bunun bootstraple bir ilgisi yoktur, React webpack'ten kaynaklanmaktadir.
// ! Cozumu ise resimleri import edip (logo ornegindeki gibi) degisken olarak kullanmaktir.

function myNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TechProEd
          <img src={logo} width="300px" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Deneme
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programlar
              </a>
              <ul className="dropdown-menu" aria-labelledby="Programlar">
                <li>
                  <a className="dropdown-item" href="/">
                    Full-Stack Java Developer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Full-Stack Data Science
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Full-Stack Web Developer
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Hakkımızda
              </a>
            </li>
          </ul>
          <form className="d-flex my-2">
            <input
              className="form-control me-3"
              type="search"
              placeholder="ara"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning" type="submit">
              ARA
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default myNav;
