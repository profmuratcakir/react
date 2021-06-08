import React from "react";
import "./Footer.css";

function Footer() {
  const yil = new Date().getFullYear();

  return (
    <footer>
      <p> Copyright ⓒ {yil}</p>
    </footer>
  );
}

export default Footer;
