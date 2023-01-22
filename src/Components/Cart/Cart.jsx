import React, {useState} from 'react'
import { useCartContext } from './../../Context';
import {BsCart4} from 'react-icons/bs'
import CartList from './../CartList/CartList';

const Cart = () => {
    const {cart} = useCartContext();
    const[isOpen,setIsOpen]=useState(false);

    const handleOpenCart = ()=>setIsOpen(prevIsOpen=>!prevIsOpen);
  return (
    <>
        <button onClick={handleOpenCart} className='btn'>Cart <BsCart4 />{cart.length}</button>
        {
          isOpen && <CartList />
        }
    </>
  )
}

export default Cart