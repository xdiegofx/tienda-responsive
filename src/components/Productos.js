import React from "react";
import ProductCard from './ProductCard';

const Productos = ({ productos }) =>{
    return (
        <section className="productos-destacados">
            <h2>Productos destacados</h2>
            <div className="productos-grid">
                {productos.map(producto => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </section>
    );
};

export default Productos;