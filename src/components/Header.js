import React from "react";

const Header = () => {
    return (
        <header>
            <div className="logo">Mi tienda</div>
            <nav>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li> 
            </nav>
        </header>
    );
};

export default Header;