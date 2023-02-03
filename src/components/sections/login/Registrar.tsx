import React from "react";
function FormRegistrar() {
  return (
    <>
    <body>

      <div className="reservation-form">
        <h3 className="font-weight-bold poppins-regular text-uppercase">Crear cuenta</h3>
        <p className="text-justify">Al crear una cuenta en nuestro sitio web usted acepta nuestros <a href="#">términos y condiciones</a>. La información introducida en el formulario debe de ser clara, precisa y legitima. Para crear una cuenta debe de llenar todos los campos que son obligatorios marcados con el icono <i className="fab fa-font-awesome-alt"></i></p>


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
              <input type="text" className="form-control border border-primary" id="Documento" aria-describedby="Documento"></input>


            </div>


            <div className="reservation-form">
              <label htmlFor="cliente_nombre" className="form-label">Nombres: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="text" className="form-control border border-primary" id="Nombres" aria-describedby="Nombres"></input>


            </div>


            <div className="reservation-form">
              <label htmlFor="cliente_apellido" className="form-label">Apellidos: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="text" className="form-control border border-primary" id="Apellidos" aria-describedby="Apellidos"></input>

            </div>


            <div className="reservation-form">
              <label htmlFor="cliente_telefono" className="form-label">Teléfono: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="text" className="form-control border border-primary" id="Telefono" aria-describedby="Telefono"></input>


            </div>



            <div className="reservation-form">
              <label htmlFor="cliente_email" className="form-label">Email: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="text" className="form-control border border-primary" id="Email" aria-describedby="Email"></input>


            </div>


            <div className="reservation-form">
              <label htmlFor="cliente_clave_1" className="form-label">Contraseña: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="password" className="form-control border border-primary" id="Contraseña" aria-describedby="Contraseña"></input>
            </div>


            <div className="reservation-form">
              <label htmlFor="cliente_telefono" className="form-label">Propietario: <i className="fab fa-font-awesome-alt"></i></label>
              <input type="checkbox" className="form-control border border-primary" id="Propietario" aria-describedby="Propietario"></input>
            </div>


            <legend><i className="fas fa-user-lock"></i> &nbsp; Información del Restaurant</legend>
            <div className="container-fluid">
              <div className="row">


                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Nombre: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Nombre" aria-describedby="Nombre"></input>

                </div>


                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Departamento: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Departamento" aria-describedby="Departamento"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_telefono" className="form-label">Teléfono: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Telefono" aria-describedby="Telefono"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Referencia: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Referencia" aria-describedby="Referencia"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Distrito: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Distrito" aria-describedby="Distrito"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Provincia: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Provincia" aria-describedby="Provincia"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_telefono" className="form-label">Usuario: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Usuario" aria-describedby="Usuario"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Tipo: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="text" className="form-control border border-primary" id="Tipo" aria-describedby="Tipo"></input>

                </div>


                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Apertura: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="time" className="form-control border border-primary" id="Apertura" aria-describedby="Apertura"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Cierre: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="time" className="form-control border border-primary" id="Cierre" aria-describedby="Cierre"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Fecha de creación: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="date" className="form-control border border-primary" id="creación" aria-describedby="creación"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Calificación: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="range" className="form-control border border-primary" id="Calificación" aria-describedby="Calificación"></input>

                </div>



                <div className="reservation-form">
                  <label htmlFor="cliente_nombre" className="form-label">Descripción: <i className="fab fa-font-awesome-alt"></i></label>
                  <input type="textarea" className="form-control border border-primary" id="Descripción" aria-describedby="Descripción"></input>

                </div>



                <p className="text-center">
                  <button type="submit" className="btn btn-info btn-sm"><i className="far fa-paper-plane"></i> &nbsp; CREAR CUENTA</button>
                </p>
                <p className="text-center">
                  <small>Los campos marcados con <i className="fab fa-font-awesome-alt"></i> son obligatorios</small>
                  <div className="d-grid">
                    <button className="redirect-button:hover" type="submit">Login</button>
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

export default FormRegistrar;