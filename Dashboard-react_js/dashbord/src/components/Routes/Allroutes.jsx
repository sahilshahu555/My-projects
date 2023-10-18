import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Users from '../../pages/users/Users';
import Product from '../../pages/product/Product';
import Login from '../../pages/Login/Login';
import Signup from '../../pages/Signup/Signup';



export const AllRoutes = () => {
  return <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>


    </Routes>
  </div>;
}
