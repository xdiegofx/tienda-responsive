import React from 'react';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import Marcas from '../components/Marcas';
import { Link } from 'react-router-dom';

/*
const productos = [
  { id: 1, nombre: 'Producto 1', precio: '$10', imagen: 'ruta/a/imagen1.jpg' },
  { id: 2, nombre: 'Producto 2', precio: '$20', imagen: 'ruta/a/imagen2.jpg' },
  { id: 3, nombre: 'Producto 3', precio: '$30', imagen: 'ruta/a/imagen3.jpg' }
];
*/

function Home() {
  return (
    <div className="Home">
        <Banner />
        <Marcas/>
        <Slider />

    </div>
  );
}

export default Home;