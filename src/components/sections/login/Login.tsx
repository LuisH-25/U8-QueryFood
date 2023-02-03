import React from "react";
import { supabase } from "../../../supabase/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function FormLogin(){
  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  console.log("USUARIO: ", supabase.auth.user());
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("EMAILLLLLL: ",email);
    try{
      const result = await supabase.auth.signIn({
        email,
      })
    }catch(error){
      console.error(error)
    }
  };


 return (
   <>
   <body>
     <div className="reservation-form">
         <h2 className="">Login Form</h2>
         <form onSubmit={handleSubmit}>
           <div className="reservation-form">
             <label htmlFor="exampleInputEmail1" className="form-label">Email: </label>
            
             <input type="email" className="form-control border border-primary" id="" aria-describedby="" onChange={(e)=>setEmail(e.target.value)}></input>
           </div>
           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Password: </label>
             <input type="password" className="form-control border border-primary" id="exampleInputPassword1"></input>
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

export default FormLogin;