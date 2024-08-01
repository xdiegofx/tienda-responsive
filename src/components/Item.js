import React from "react";
import "../styles/Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {

  return (
    <div className="item">
      <Link to={`/producto/${props.id}`}>
        <img src={props.image} alt="Product image"/>
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
            ${props.old_price}
          </div>
          <div className='item-price-old'>
            ${props.new_price}
          </div>
      </div>
    </div>
  )
}

export default Item;