import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";



function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path ="/" element={<Home/>}/>
     <Route path ="/product" element={<product/>}/>
     <Route path ="/servises" element={<product/>}/>
     <Route path ="/resources" element={<product/>}/>
     <Route path ="/shade-card" element={<product/>}/>
     <Route path ="/colour-combination" element={<product/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}
export default App;