import React, {createContext, useState} from 'react';
export const NewContext = createContext();


export const Context = ({children})=>{
    const [cart,setCart] = useState([]);
    const handleAdd = (item) =>{
        setCart(prevCart => {      
          prevCart.push(item)
          return prevCart;
        });
        console.log(cart);
      }
    const value = {cart,setCart,handleAdd};
    return (
        <NewContext.Provider value={value}>
            {children}
        </NewContext.Provider>
    )
}