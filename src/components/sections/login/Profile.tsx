import React from "react";

function FormProfile() {
  return (
    <>
    <body>

      <div className="reservation-form">
        
      <h2 className="">Registrar Perfil</h2>

        <form>
          <div className="reservation-form">
            <legend><i className="far fa-address-card"></i> &nbsp; Información personal</legend>
            <div className="">
              <select className="form-control" name="cliente_tipo_documento_reg" id="cliente_tipo_documento">
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

          </div >
        </form>
      </div >

    </body >
</>


 )
};

export default FormProfile;