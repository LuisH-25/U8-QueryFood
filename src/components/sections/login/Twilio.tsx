import React, { useState } from 'react';
import '../../../styles/App.css';

interface FormTwilio {
  nombre: string;
  calificacion: number;
  telefono: string;
}

const FormTwilio: React.FC = () => {
  const [formData, setFormData] = useState<FormTwilio>({
    nombre: '',
    calificacion: 0,
    telefono: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
   <div className='reservation-form'>
     <form onSubmit={handleSubmit}>
      <div className='reservation-form'>
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
            <label htmlFor="calificacion" className="form-label">Calificacion: </label>
            <input  
                type="number"
                id="calificacion"
                name="calificacion"
                value={formData.calificacion}
                onChange={handleInputChange}>
          </input>
        </div>


      <div className="reservation-form ">
      <label htmlFor="phoneNumber">Teléfono:</label>
        <input 
          type="text"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
      </div>
     <div className="reservation-form ">
     <button className="special-button" type="submit">Contactar</button>
     </div>
    </form>
   </div>
  );
};

export default FormTwilio;