import React, { useState } from "react";
import { supabase } from "../../../supabase/client";

function FormProfile() {
/*
  const [formData, setFormData] = useState({
    cliente_tipo_documento: "",
    cliente_numero_documento: "",
    cliente_nombre: "",
    cliente_telefono: "",
    cliente_propietario: false
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!formData.cliente_tipo_documento || !formData.cliente_numero_documento || !formData.cliente_nombre || !formData.cliente_telefono) {
      return console.error("Todos los campos son requeridos");
    }

    const auth = await getUser();
    const { data, error } = await supabase
      .from("profile")
      .insert({
        document: formData.cliente_numero_documento,
        nombres: formData.cliente_nombre,
        telefono: formData.cliente_telefono,
        es_propietario: formData.cliente_propietario,
        user_id: auth.user?.id
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  const handleChange = (event: {
    target: {
      checked: any; id: any; value: any;
    };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value === "cliente_propietario" ? event.target.checked : event.target.value
    });
  };

*/


  return (
    <>
      <body>
        <div className="reservation-form ">
          <h2 className="">Registrar Perfil</h2>

          <form>
            <div className="reservation-form">
              <legend><i className="far fa-address-card"></i> &nbsp; Información personal</legend>
              <div className="">
                <select
                  className="form-control"
                  name="cliente_tipo_documento_reg"
                  id="cliente_tipo_documento"
                // value={formData.cliente_tipo_documento}
                // onChange={handleChange}
                >
                  <option value="" >Tipo de documento</option>
                  <option value="DNI" >1 - DNI</option>
                  <option value="Pasaporte" >2 - RUC</option>S
                </select>
                <label htmlFor="cliente_tipo_documento" className="form-label"></label>
              </div>



              <div className="reservation-form">
                <label htmlFor="cliente_numero_documento" className="form-label">Numero de documento: <i className="fab fa-font-awesome-alt"></i></label>
                <input type="text" className="" id="Documento" aria-describedby="Documento"></input>
              </div>


              <div className="reservation-form">
                <label htmlFor="cliente_nombre" className="form-label">Nombres: <i className="fab fa-font-awesome-alt"></i></label>
                <input type="text" className="" id="Nombres" aria-describedby="Nombres"></input>
              </div>

              <div className="reservation-form">
                <label htmlFor="cliente_telefono" className="form-label">Teléfono: <i className="fab fa-font-awesome-alt"></i></label>
                <input type="text" className="" id="Telefono" aria-describedby="Telefono"></input>
              </div>

              <div className="reservation-form">
                <label htmlFor="cliente_telefono" className="form-label">Propietario: <i className="fab fa-font-awesome-alt"></i></label>
                <input type="checkbox" className="" id="Propietario" aria-describedby="Propietario"></input>
              </div>
              <button
                className="action-button"
              // onClick={ handleLogin }
              >Registrar
              </button>

            </div >
          </form>
        </div >

      </body >
    </>


  )
};

export default FormProfile;

function getUser() {
  throw new Error("Function not implemented.");
}
