import React, { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import { HeaderProps } from "../interface/queryfood";


const Navbar: React.FC<HeaderProps> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav>
      <nav className="burger">
        <img
          src={require("../assets/nav-logo.png")}
          alt="Query Food logo"
          className="nav-image"
        />

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ""}
    </nav>
  );
};

export default Navbar;