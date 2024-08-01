import React, { useContext } from 'react';
import "./styles/shopCategory.css";
import { ShopContext } from '../context/ShopContext';
import Item from '.././components/Item';
import all_products from ".././assets/all_products/all_products";

const ShopCategory = (props) => {



  return (
    <div className='shop-category'>
      <div className="shopCategory-indexSort">
        <p>
          {/* Muestra el rango de productos que se están mostrando y el total de productos */}
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Ordenar por :
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_products.map((item,i) => {
          if (props.category == item.category){
            return <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          }else{
            return null;
          }
        }
    )    
  }
      </div>  
      <div className="shopcategory-loadmore">
        Explore Mas
      </div>    
    </div>
  )
}

export default ShopCategory
