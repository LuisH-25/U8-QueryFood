import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarProps} from '../interface/queryfood'
import { supabase } from "../supabase/client";
// import { getSession } from './sections/services/auth'; 


const Navigation: React.FC<NavbarProps> = (props: NavbarProps) => {

  async function getUser2() {
    const { data } = await supabase.auth.getUser();
    return data;
  }
  async function prueba(){
    const data_user = await getUser2();
    console.log("USUARIO navigation getSession: ", data_user);        //OBTENGO EL USUARIO LOGUEADOOO
  }
  prueba();
  // const user = await supabase.auth.getUser();
  // console.log("user loguado:" ,user)

  if (supabase.auth.getUser() == undefined){
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

      
      <Link className="hover-effect" to="/profile">
          <h1>SignUp</h1>
      </Link>
    </menu>
  );
};

export default Navigation;
