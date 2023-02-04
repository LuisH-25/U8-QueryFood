import React from 'react';
import { Route , Routes} from "react-router-dom";
import Homepage from "../components/pages/Home";
import About from "../components/pages/About";
import Restaurants from "../components/pages/Restaurants"
import Login from "../components/pages/Login"
import Profile from "../components/pages/Profile"
import Logout from '../components/pages/Logout';


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Routing;


