import React from 'react';
import { Route , Routes} from "react-router-dom";
import Homepage from "../components/pages/Home";
import About from "../components/pages/About";
import Restaurants from "../components/pages/Restaurants"
import Login from "../components/pages/Login"
import Profile from "../components/pages/Profile"
import Logout from '../components/pages/Logout';
import ResgistrarRestaurante from '../components/pages/RegistrarRestaurante';
import RegistrarPlatos from '../components/pages/RegistrarPlatos';
import Plato from '../components/pages/Platos'
import Twilio from '../components/pages/Twilio';
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/registrar_restaurants" element={<ResgistrarRestaurante />} />
      <Route path="/registrar_platos" element={<RegistrarPlatos />} />
      <Route path="/signup" element={<Profile />} />
      <Route path="/verPlatos" element={<Plato />} />
      <Route path="/twilioCalification" element={<Twilio />} />


    </Routes>
  );
}


export default Routing;


