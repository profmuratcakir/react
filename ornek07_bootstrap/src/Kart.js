import React from "react";
import dataScience from "./img/data-science.png";
import developer from "./img/developer.png";
import tester from "./img/tester.png";
const Kart = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 col-xl-4 my-2 d-flex justify-content-center">
          <div className="card" style={{ width: "16rem" }}>
            <img
              src={dataScience}
              alt=""
              className="card-img-top img-fluid w-50 mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">DATA SCIENCE KURSU</h5>
              <p className="card-text">
                Ülkemizdeki en iyi Veri Bilimi kursuna kayıt olmak için acele
                ediniz.
              </p>
              <a href="/" className="btn btn-success">
                Detaylar
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4 my-2">
          <div className="card" style={{ width: "16rem" }}>
            <img
              src={tester}
              alt=""
              className="card-img-top img-fluid w-50 mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">TESTER KURSU</h5>
              <p className="card-text">
                Dünyamızdaki en iyi tester kursuna kayıt olmak için acele
                ediniz.
              </p>
              <a href="/" className="btn btn-success">
                Detaylar
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4 my-2">
          <div className="card" style={{ width: "16rem" }}>
            <img
              src={developer}
              alt=""
              className="card-img-top img-fluid w-50 mx-auto d-block"
            />
            <div className="card-body">
              <h5 className="card-title">DEVELOPER KURSU</h5>
              <p className="card-text">
                Gezegendeki en iyi Developer kursuna kayıt olmak için acele
                ediniz.
              </p>
              <a href="/" className="btn btn-success">
                Detaylar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kart;
