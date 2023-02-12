import React, { useState } from 'react';
import '../../../styles/App.css';
import {FormTwilio} from '../../../interface/queryfood'


function FormRegisterTwilio() {
      const [formData, setFormData] = useState<FormTwilio>({
    nombre: '',
    comentario: '',
    calificacion: 0,
    telefono: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (name === 'calificacion') {
        const numValue = parseInt(value);
        if (!isNaN(numValue) && numValue >= 1 && numValue <= 5) {
          setFormData({ ...formData, [name]: numValue });
        }
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

 
  
    return (
      <div className="reservation-form">
        {submitted ? (
          <div className='confirmation-message '>
            Gracias {formData.nombre} por dejar tu calificación de {formData.calificacion} estrellas y continuar con el proceso de reserva.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="reservation-form">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
  
            <div className="reservation-form ">
              <label htmlFor="calificacion" className="form-label">
                Calificacion:{" "}
              </label>
              <input
                type="number"
                id="calificacion"
                name="calificacion"
                value={formData.calificacion}
                onChange={handleInputChange}
              />
            </div>
            <div className="reservation-form">
              <label htmlFor="nombre">Comentario:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.comentario}
                onChange={handleInputChange}
              />
            </div>
  
            <div className="reservation-form ">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
            </div>
            <div className="reservation-form ">
              <button className="special-button" type="submit">
                Contactar
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };
  
  export default FormRegisterTwilio;