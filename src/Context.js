import React, {createContext, useState} from 'react';
export const CartContext = createContext();
export const useCartContext = ()=>React.useContext(CartContext);
export const CarContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    const handleAdd = (item) =>{
        setCart(prevCart => [...prevCart, item])
        
}
    const value = {cart,setCart,handleAdd};
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}