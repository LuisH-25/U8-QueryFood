import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from "../interface/queryfood";
import { supabase } from "../supabase/client";

const Navigation: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [is_loged, setIsloged] = useState(false);

  async function getUser2() {
    const { data } = await supabase.auth.getUser();

    if (data.user?.id) setIsloged(true);

    return data;
  }

  useEffect(() => {
    getUser2();
  }, []);

  return (
    <>
      {is_loged ? (
        <menu className={`navbar-menu ${props.device}`}>
          {props.device === "mobile" ? (
            ""
          ) : (
            <Link to="/">
              <img
                src={require("../assets/nav-logo.png")}
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
            <h1>Restaurantes</h1>
          </Link>
          <Link className="hover-effect" to="/registrar_restaurants">
            <h1>Registrar Restaurantes</h1>
          </Link>
          <Link className="hover-effect" to="/registrar_platos">
            <h1>Registrar Platos</h1>
          </Link>

          <Link className="hover-effect" to="/logout">
            <h1>Salir</h1>
          </Link>
        </menu>
      ) : (
        <menu className={`navbar-menu ${props.device}`}>
          {props.device === "mobile" ? (
            ""
          ) : (
            <Link to="/">
              <img
                src={require("../assets/nav-logo.png")}
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

          <Link className="hover-effect" to="/signup">
            <h1>SignUp</h1>
          </Link>
        </menu>
      )}
    </>
  );
};

export default Navigation;
