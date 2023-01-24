import { useCartContext } from './../../Context';
import './CartList.css'
import {GoTrashcan} from 'react-icons/go'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const CartList = () => {
    const {setCart,cart} = useCartContext();
    const handleDelete = (i)=>{
      setCart(prevCart=>prevCart.filter((element,index)=>index!=i))
    } 
    const total = cart.reduce((acc,item)=>{
      return acc+item.price;
    },0)
  return (
    <>
        <div className="cartListContainer">
            {cart.map((item,index)=>{
                return(
                <div className="one" key={index}> 
                  <div className="left">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="ri">
                    <h4>price : {item.price}</h4>
                  </div>
                  <div className="delete">
                    <button className='btn btndel' onClick={()=>handleDelete(index)} ><GoTrashcan /></button>
                  </div>
                </div>
                
                )           
            })}
            <h4>Total Price : {total}</h4>
            {
              Boolean(cart.length) && (<div className="delete">
              <Link className='btn btncheck' to="/checkout">Check Out</Link>
            </div>)
            }
            
        </div>
    </>
  )
}

export default CartList