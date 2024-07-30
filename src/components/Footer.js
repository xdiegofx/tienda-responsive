import React from 'react';
import "../styles/Footer.css";
import whatsapp from "../assets/whatsapp.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";

const Footer = () => {
  return (
    <footer className='footer-final'>
      <p><strong>Contacto </strong>: info@mitienda.com</p>
      <img className="iconos" src={whatsapp} alt="Imagen whatsapp"></img>
      <img className="iconos" src={insta} alt="Imagen carrito"></img>
      <img className="iconos" src={facebook} alt="Imagen carrito"></img>
      <img className="iconos" src={x} alt="Imagen carrito"></img>
      <p><strong>&copy; 2023 MiTienda.</strong> <br/>  Todos los derechos reservados.</p>
    </footer>
  );
};


export default Footer;