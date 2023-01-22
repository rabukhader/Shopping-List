import React , { useContext, useEffect } from 'react'
import {data} from '../../utils.js'
import { useCartContext } from './../../Context';
import './Product.css'

const Product = () => {

  const {handleAdd} = useCartContext();

  return (
    <>
      <div className="container listContainer">
      
        {
          data.map((item,index)=>
          <div className="item" key={index}> 
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <h4>price : {item.price}</h4>
            <button className='btn' onClick={()=>handleAdd(item)}>Add to cart</button>
          </div>
          )
        }
      </div>
    </>
  )
}

export default Product