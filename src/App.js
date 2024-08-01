import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; 
import Producto from './components/Producto';
import ProductDisplay from './pages/ProductDisplay';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Apple from './pages/Apple';
import Intel from './pages/Intel';
import Ryzen from './pages/Ryzen';
/*
const productos = [
  { id: 1, nombre: 'Producto 1', precio: '$10', imagen: 'ruta/a/imagen1.jpg' },
  { id: 2, nombre: 'Producto 2', precio: '$20', imagen: 'ruta/a/imagen2.jpg' },
  { id: 3, nombre: 'Producto 3', precio: '$30', imagen: 'ruta/a/imagen3.jpg' }
];
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Producto' element={<ProductDisplay/>}>
            <Route path=':productId' element={<ProductDisplay/>}/>
          </Route>
          <Route path='/Apple' element={<ShopCategory category="apple"/>}/>
          <Route path='/Intel' element={<ShopCategory category="intel"/>}/>
          <Route path='/Ryzen' element={<ShopCategory category="ryzen"/>}/>

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;