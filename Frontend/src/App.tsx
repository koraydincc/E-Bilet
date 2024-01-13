import React from 'react';
import HomePage from './Pages/HomePage'
import './App.css';
import { Route, Routes } from "react-router-dom";
import SeyahatSorgulama from './Pages/SeyahatSorgulama';
import LoginPage from './Pages/LoginPage'


function App() {
  return (
    <Routes>
      <Route path='/*' element={<HomePage/>}>
        
      </Route>
      <Route path='/SeyahatSorgulama' element={<SeyahatSorgulama/>}/>
      <Route path='/Giris' element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
