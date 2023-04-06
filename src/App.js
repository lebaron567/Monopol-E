import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./page/Home.js";
import Login from "./page/Login.js";


const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="*" element={<Home />}/>
    <Route path="/a" element={<Login />}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App;