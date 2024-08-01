import React from "react";
import "../styles/Marcas.css"
import ryzen from "../assets/ryzen.jpg"
import intel from "../assets/apple.jpg"
import apple from "../assets/intel.jpg"
import { Link } from "react-router-dom";

const Productos = ({ productos }) =>{
    return (
        <section className="marcas-destacadas">
            <h2>Marcas destacadas</h2>
            <Link to='/Ryzen'>
                <img id="ryzen" src={ryzen} alt="ryzen"/>
            </Link> 
            <Link to='/Intel'>
                <img id="apple" src={apple} alt="ryzen"/>         
            </Link>
            <Link to='/Apple'>
                <img id="intel" src={intel} alt="ryzen"/>
            </Link>

        </section>
    );
};

export const marcas = [
    {
        id: 1 , imgUrl: ryzen
    }
];
export default Productos;
