import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import Home from './components/Home'; 
import AllUser from './components/AllUser';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route exact path='/' element={ <Home /> } />
       <Route exact path='/all' element={ <AllUser />} />
       <Route exact path='/add' element={ <AddUser />} /> 
       <Route exact path='/edit/:id' element={ <EditUser />} />    
       <Route element={<NotFound/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
