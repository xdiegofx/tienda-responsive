import React, { createContext, useState } from "react";
import all_products from "../assets/all_products/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {


  const [all_products, setAll_Products] = useState([]);
  const contextValue = {all_products};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children} {/* Renderiza los componentes hijos que usan el contexto */}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
