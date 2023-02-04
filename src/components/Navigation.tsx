import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarProps} from '../interface/queryfood'
import { supabase } from "../supabase/client";

const Navigation: React.FC<NavbarProps> = (props: NavbarProps) => {
 

  console.log("USUARIO: ", supabase.auth.user());
  if (supabase.auth.user() != undefined){
    return (
      <menu className={`navbar-menu ${props.device}`}>
        {props.device === 'mobile' ? (
          ''
        ) : (
          <Link to="/">
            <img
              src={require('../assets/nav-logo.png')}
              alt="Query Food logo"
              className="nav-image"
            />
          </Link>
        )}
        <Link className="hover-effect" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="hover-effect" to="/about">
          <h1>About</h1>
        </Link>
        <Link className="hover-effect" to="/restaurants">
          <h1>Restaurants</h1>
        </Link>

        <Link className="hover-effect" to="/profile">
          <h1>Perfil</h1>
        </Link>
  
        <Link className="hover-effect" to="/login">
          <h1>Salir</h1>
        </Link>
        
        
      </menu>
    );
  }
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === 'mobile' ? (
        ''
      ) : (
        <Link to="/">
          <img
            src={require('../assets/nav-logo.png')}
            alt="Query Food logo"
            className="nav-image"
          />
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
    
      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>
    </menu>
  );
};

export default Navigation;
