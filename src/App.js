import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
import CheckOut from './Pages/CheckOut/CheckOut';

const App = () => {
  return (
    <>
    
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
      </Routes>
    </>
  )
}

export default App
