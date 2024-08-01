import React from "react";
import "../styles/producto.css"

const Producto = ({product}) => {

  return(
    <div className="product">
      <div className="product-left">
        <div className="product-image-list">
          <img src={product.image} alt="Product image"/>
          <img src={product.image} alt="Product image"/>
          <img src={product.image} alt="Product image"/>
          <img src={product.image} alt="Product image"/>
        </div>
        <div className="product-image">
          <img src={product.image} className="product-main-img"/>
        </div>
      </div>



      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="product-stars">

        </div>
      <div className="product-right-prices">
        <div className="product-right-old-price">
          {product.old_price}
        </div>
        <div className="product-right-new-price">
          {product.new_price}
        </div>
      </div>
      <div className="product-description">
        <p>Gran producto en oferta!</p>
      </div>
              <button
          className="addToCart-button"
          >
            Agregar al carrito
          </button>
      </div>
    </div>
  )
}

export default Producto;