import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Query Food logo"
          />
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>Av Siempre viva 123</li>
            <br />
            <li>(+51)555-555-555</li>
            <br />
            <a href="mailto: info@queryfood.com" target="_blank" rel="noreferrer">
              info@queryfood.com
            </a>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://u8-query-food.vercel.app" target="_blank" rel="noreferrer">
              Join us!
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
};

export default Footer;
