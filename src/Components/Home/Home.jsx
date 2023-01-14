import React, { useState } from 'react'
import './Home.css'
import p1 from '../../assets/shirt.jpg'
import p2 from '../../assets/trouser.png'
import p3 from '../../assets/glass.jpg'
import p4 from '../../assets/necklace.png'
const data = [
  {
    name:'shirt',
    price:50,
    img:p1
  },
  {
    name:'trouser',
    price:100,
    img:p2
  },
  {
    name:'glass',
    price:250,
    img:p3
  },
  {
    name:'necklace',
    price:150,
    img:p4
  }
]
const piece = {
  name: '',
  img:'',
  price:''
}
const Home = () => {

  const [piece,setPiece] = useState({});

  const handleAdd = (e) =>{
    console.log(e.target);
    piece.id = 
    piece.name = 
    piece.img =
    piece.price = 

    console.log(piece);
    setPiece(piece);
  }

  return (
    <>
    <div className="container listContainer">
      {
        data.map((item,index)=>
        <div className="item">
          <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} />
          <h4>price : {item.price}</h4>
          <button className='btn' onClick={handleAdd}>Add to cart</button>
        </div>
        )
      }
    </div>
    {/* {
      piece.map((item)=>
        <div className="cart">
          <h3>{item.name}</h3>
          <img src={item.img} alt={item.name} />
          <p>{item.priece}</p>
        </div>
      )} */}
      
    </>
  )
}

export default Home