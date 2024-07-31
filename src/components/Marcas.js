import React from "react";
import "../styles/Marcas.css"
import ryzen from "../assets/ryzen.jpg"
import intel from "../assets/apple.jpg"
import apple from "../assets/intel.jpg"

const Productos = ({ productos }) =>{
    return (
        <section className="marcas-destacadas">
            <h2>Marcas destacadas</h2>
            <img id="ryzen" src={ryzen} alt="ryzen"/>
            <img id="apple" src={apple} alt="ryzen"/>
            <img id="intel" src={intel} alt="ryzen"/>
        </section>
    );
};

export const marcas = [
    {
        id: 1 , imgUrl: ryzen
    }
];
export default Productos;
