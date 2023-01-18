import React, {useContext} from 'react'
import { NewContext } from './../../Context';
import {BsCart4} from 'react-icons/bs'
import CartList from './../CartList/CartList';

const Cart = () => {
    const {cart} = useContext(NewContext);

    const draw = () =>{
        <CartList />
    }
  return (
    <>
        <button onClick={draw} className='btn'>Cart <BsCart4 />{cart.length}</button>
    </>
  )
}

export default Cart