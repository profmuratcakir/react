import React from "react";

//  * fontawesome kütüphanesini eklemek için
// ! 1. terminalde npm install font-awesome
// ! 2. index.html'e adagidaki linki eklemek gerekir.
// ?<link
// ?  rel="stylesheet"
// ?  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

const Footer = () => {
  return (
    <div
      className="
        container-fluid
        d-flex
        justify-content-between
        p-3
        bg-dark
        text-light
        mb-4
        mt-3
      "
    >
      <div>
        <i className="fa fa-phone text-warning"></i>
        <span className="d-none d-md-inline">+90 555 55 55</span>
        <i className="fa fa-whatsapp text-warning ms-3"></i>
        <span className="d-none d-md-inline">+90 555 55 55</span>
      </div>

      <div>
        <i className="fa fa-twitter text-info mx-2"></i>
        <i className="fa fa-youtube text-info mx-2"></i>
        <i className="fa fa-instagram text-info mx-2"></i>
        <span className="d-none d-lg-inline">#techproed</span>
      </div>
    </div>
  );
};

export default Footer;
