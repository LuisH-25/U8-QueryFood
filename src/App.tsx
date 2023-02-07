import React from 'react';
import './styles/App.css';
import Navbar from "./components/Header";
import Routing from "./routers/Routing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar device={''} />
      <Routing />
      <Footer />
    </>
  )
}

export default App;
