import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Productos from './components/Productos';
import Slider from './components/Slider';
import Footer from './components/Footer';

const productos = [
  { id: 1, nombre: 'Producto 1', precio: '$10', imagen: 'ruta/a/imagen1.jpg' },
  { id: 2, nombre: 'Producto 2', precio: '$20', imagen: 'ruta/a/imagen2.jpg' },
  { id: 3, nombre: 'Producto 3', precio: '$30', imagen: 'ruta/a/imagen3.jpg' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Productos productos={productos} />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;