import React from "react";
import "../styles/Header.css";
import lupa from "../assets/lupa.png";
import carrito from "../assets/carrito_compras.png";
import casa from "../assets/icono_casa.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <nav>
            
          <li>
            <a href="#home"><img className="HeaderContainer-iconoCasa" src={casa} alt="Icono casa"></img></a>
          </li>
          <li>
            <a href="#products">About</a>
          </li>
          <li>
            <a href="#contact">Skills</a>
          </li>
          <li>
            <a href="#contact">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
        <div className="header-icons">
          <span>
        
            <img src={lupa} alt="Imagen lupa"></img>
          </span>
          <span>
        
            <img src={carrito} alt="Imagen carrito"></img>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
