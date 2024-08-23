import React, { useEffect } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Admin.css';
import { Routes,Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
  useEffect(() => {
    console.log('Env: ', import.meta.env.VITE_BASE_URL);
  }, []);

  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default Admin;