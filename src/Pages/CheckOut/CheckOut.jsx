import React from 'react'
import './CheckOut.css';
import { Link } from 'react-router-dom'
const CheckOut = () => {
  return (
  <>
  <div className="all">
    <form action="">
      <div className="feild">
        <label htmlFor="">Full Name</label>
        <input className="formInput" type="text" />
      </div>
      <div className="feild">
        <label htmlFor="">Card Number</label>
        <input className="formInput" type="number" />
      </div>
      <div className="feild">
        <label htmlFor="">Code</label>
        <input className="formInput" type="number" />
      </div>

    </form>
    <div className="home">
      <Link className='btn btnHome' to="/">Home</Link>
    </div>
  </div>
  
  
  </>
  )
}

export default CheckOut