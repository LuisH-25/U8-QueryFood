import React from 'react';
import { Route , Routes} from "react-router-dom";
import Homepage from "../components/pages/Home";
import About from "../components/pages/About";
import Restaurants from "../components/pages/Restaurants"
import Login from "../components/pages/Login"
import Registrar from "../components/pages/Registrar"


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  );
}

export default Routing;


