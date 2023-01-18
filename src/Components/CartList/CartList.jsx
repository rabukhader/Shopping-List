import React, {useContext} from 'react'
import { NewContext } from './../../Context';

const CartList = () => {
    const {cart} = useContext(NewContext);
  return (
    <>
        <div className="container cartListContainer">
            {cart.map((item,index)=>{
                <div className="item" key={index}> 
                  <h2>{item.name}</h2>
                  <img src={item.img} alt={item.name} />
                  <h4>price : {item.price}</h4>
                </div>
            })}
        </div>
    </>
  )
}

export default CartList