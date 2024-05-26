import React, { createContext, useReducer, useState } from "react";


const products = [
    {id: 1, image: axe, name: "Axe", description: "description", price: "99.99"},
    {id: 2, image: axe2, name: "Axe_logo", description: "description", price: "7.99"}
];

const cart = []


// saved books reducer function
const setCartReducer = (state, action) => {

    const { book, type } = action;
    switch(action) {
        case "ADDTOCART":
            
        case "REMOVEFROMCART":
    }
    
  
    if (type === "add") return [...state, book];
  
    if (type === "remove") {
      const bookIndex = state.findIndex((x) => x.title === book.title);
  
      if (bookIndex < 0) return state;
  
      // avoid mutating the original state, create a copy
      const stateUpdate = [...state];
  
      // then splice it out from the array
      stateUpdate.splice(bookIndex, 1);
      return stateUpdate;
    }
    return state;
  };


export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [cart, setCart] = useState(products);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};