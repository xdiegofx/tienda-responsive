import React from 'react';
import { useContext } from 'react';
import Producto from '../components/Producto';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import all_products from '../assets/all_products/all_products';

const ProductDisplay = () => {



  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));

  return (
    <div>
      
      <Producto product={product}/>
    </div>
  )
}

export default ProductDisplay
