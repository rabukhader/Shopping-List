import React from 'react'
import './Home.css'
import ProductList from '../../Components/ProductList/ProductList';
import Navbar from './../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  )
}

export default Home