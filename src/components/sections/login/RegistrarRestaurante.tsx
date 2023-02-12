import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
 
  const [register, setRegister] = useState<{
    nombre: string;
    departamento:  String;
    telefono:      Number;
    referencia:    String;
    distrito:      String;
    provincia:     String;
    usuarioId:    Number;  
    tipo:          String;
    apertura:      String;
    cierre:        String; 
    fech_creacion: String;
    calificacion:  String;
    descripcion:  String;


  }>({
    nombre:"",
    departamento:  "",
    telefono: 0,
    referencia:   "",
    distrito:     "",
    provincia:     "",
    usuarioId: 0,
    tipo:          "",
    apertura:  "",
    cierre:    "",
    fech_creacion: "",
    calificacion:  "",
    descripcion: "",


  });


  const navigate = useNavigate()

  const handleInputChange = (e: any) => {
    if (!e.target.value) return;
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeNumeric = (e: any) => {
    if (!e.target.value) return;
    setRegister({
      ...register,
      [e.target.name]: +e.target.value,
    });
  };

  const handleInputChangeBoolean = (e: any) => {
    if (!e.target.value) return;
    setRegister({
      ...register,
      [e.target.name]: e.target.value === 'true' ? true : false
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(register)
    fetch("https://restaurantes-mu.vercel.app/restaurante", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success sent:", data);
        navigate("/restaurants");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  return (
    <>
      <body>
      <div className="reservation-form">
         <h2 className="">Ingrese Restaurante</h2>
         <form onSubmit={handleSubmit}>
           <div className="reservation-form">

             <label htmlFor="exampleInputEmail1" className="form-label">Nombre: </label>
             <input type="text" className="form-control border border-primary" id="" aria-describedby="Nombre"
             onChange={handleInputChange} name="nombre"
             ></input>
           </div>
           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Departamento : </label>
             <input type="text" aria-describedby="Nombre" onChange={handleInputChange} name="departamento"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Telefono: </label>
             <input type="number"  aria-describedby="Nombre" onChange={handleInputChangeNumeric} name="telefono"></input>

           </div>

           
           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Referencia: </label>
             <input type="text"aria-describedby="Nombre"onChange={handleInputChange} name="referencia" ></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Distrito: </label>
             <input type="text" aria-describedby="Nombre"  onChange={handleInputChange} name="distrito"></input>
           </div>


           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Provincia: </label>
             <input type="text"  aria-describedby="Nombre" onChange={handleInputChange} name="provincia" ></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">IdUsuario: </label>
             <input type="text"aria-describedby="Nombre" onChange={handleInputChangeNumeric} name="usuarioId" ></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Tipo: </label>
             <input type="text"  aria-describedby="Nombre" onChange={handleInputChange} name="tipo"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Apertura: </label>
             <input type="time" aria-describedby="Nombre"  onChange={handleInputChange} name="apertura"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Cierre: </label>
             <input type="time" aria-describedby="Nombre" onChange={handleInputChange} name="cierre"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Fecha Creacion: </label>
             <input type="date"  aria-describedby="Nombre" onChange={handleInputChange} name="fech_creacion"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Calificacion: </label>
             <input type="number" aria-describedby="Nombre" onChange={handleInputChangeNumeric} name="calificacion"></input>
           </div>

           <div className="reservation-form ">
             <label htmlFor="exampleInputPassword1" className="form-label">Descripcion: </label>
             <input type="text" aria-describedby="Nombre" onChange={handleInputChange} name="descripcion"></input>
           </div>


           <button className="action-button" type="submit">Registrar Restaurante</button>



           
         </form> 


        
         </div>
        
      </body >
    </>


  )
};

export default SignUp;