import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";


const FormRegistrarPlatos = () => {
 
  const [platos, setPlatos] = useState<{
    nombre_plato: String;
    precio: number;
    imagen: String;
    disponibilidad: boolean;
    descripcion: string;
    restaurante_Id: number;
    
  }>({
    nombre_plato: "",
    precio: 0.0,
    imagen:"",
    disponibilidad: false,
    descripcion: "",
    restaurante_Id: 0,

  });

  const navigate = useNavigate()

  const handleInputChange = (e: any) => {
    if (!e.target.value) return;
    setPlatos({
      ...platos,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangeNumeric = (e: any) => {
    if (!e.target.value) return;
    setPlatos({
      ...platos,
      [e.target.name]: +e.target.value,
    });
  };

  const handleInputChangeBoolean = (e: any) => {
    if (!e.target.value) return;
    setPlatos({
      ...platos,
      [e.target.name]: e.target.value === 'false' ? true : false
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(platos)
    fetch("https://restaurantes-mu.vercel.app/platos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(platos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success sent:", data);
        navigate("/abaout");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  


  return (
    <>
      <body>
      <div className="reservation-form">
        <h3 className="font-weight-bold poppins-regular text-uppercase">Crear Platos</h3>
        <form onSubmit={handleSubmit}>      
      <div className="reservation-form">

              <div className="container-fluid">
                <div className="row">

                  <div className="reservation-form">
                    <label htmlFor="plato_nombre" className="form-label">Nombre: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="text" className="form-control border border-primary" id="nombre_plato" aria-describedby="nombre_plato"
                      onChange={handleInputChange} name="nombre_plato"></input>
                     
                  </div>


                  <div className="reservation-form">
                    <label htmlFor="plato_precio" className="form-label">Precio: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="number" step="0.01" className="form-control border border-primary" id="precio" aria-describedby="precio"
                      onChange={handleInputChangeNumeric} name="precio"></input>

                  </div>



                  <div className="reservation-form">
                    <label htmlFor="plato_imagen" className="form-label">Imagen: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="text" className="form-control border border-primary" id="imagen" aria-describedby="imagen"
                      onChange={handleInputChange} name="imagen"></input>

                  </div>

                  <div className="reservation-form">
                    <label htmlFor="plato_disponibilidad" className="form-label">Disponibilidad: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="checkbox" value="false"className="form-control border border-primary" id="disponibilidad" aria-describedby="disponibilidad"
                     onChange={handleInputChangeBoolean}name="disponibilidad"></input>

                  </div>

                  
                  <div className="reservation-form">
                    <label htmlFor="cliente_nombre" className="form-label">Descripcion: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="text" className="form-control border border-primary" id="descripcion" aria-describedby="descripcion"
                     onChange={handleInputChange} name="descripcion"></input>

                  </div>

                  <div className="reservation-form">
                    <label htmlFor="plato_restaurante" className="form-label">Restaurante: <i className="fab fa-font-awesome-alt"></i></label>
                    <input type="number"  className="form-control border border-primary" id="restaurante" aria-describedby="restaurante"
                     onChange={handleInputChangeNumeric} name="restaurante_Id"></input>

                  </div>


                  <p className="text-center">
          
                    <button className="action-button" type="submit">Registrar plato</button>

                  </p>

                  <p className="text-center">
                    <small>Los campos marcados con <i className="fab fa-font-awesome-alt"></i> son obligatorios</small>
                    <div className="d-grid">
                    </div>
                  </p>
                </div >
              </div >
            </div >
            </form>  
        </div >
        
      </body >
    </>


  )
};

export default FormRegistrarPlatos;