import React from "react";
import { useAuthStore } from "../../../token/token";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginRequest } from "../ll/log";


const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const [correo, setcorreo] = useState("");
  const [contrasena, setcontrasena] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resLogin = await loginRequest(correo, contrasena);
    if (resLogin.status === 200) {
      console.log(resLogin);
      setToken(resLogin.data.token);
      setUser(resLogin.data.data);
      navigate("/registrar");
    }
  };


 return (
   <>
   <body>
     <div className="reservation-form">
         <h2 className="">Login Form</h2>
         <form onSubmit={handleSubmit}>
           <div className="reservation-form">
             <label htmlFor="exampleInputEmail1" className="form-label">Correo: </label>
            
             <input
                className="form-control"
                type="email"
                placeholder="ejemplo@correo.com"
                name="email"
                required
                value={correo}
                onChange={(event) => setcorreo(event.target.value)}
              />
           </div>
           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Contraseña: </label>
             <input
                className="form-control"
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                required
                value={contrasena}
                onChange={(event) => setcontrasena(event.target.value)}
              />
           </div>
           <p className="small"><a className="text-primary" href="#forgotpassword">Forgot password?</a></p>
           <div className="d-grid">
            <button
                  className="action-button"
                  // onClick={ handleLogin }
            >Login
            </button>
           </div>
         </form> 
          

      </div>
   </body>
</>


 )
}

export default Login;