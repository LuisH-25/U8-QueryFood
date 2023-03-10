import React from "react";
import useForm from '../../../hooks/useForm'
import { signUpWithEmail, updateProfile } from '../../../services/auth'
import { FormValues } from "../../../interface/queryfood";
import { supabase } from '../../../supabase/client'

const initialState: FormValues = {
  nombre: '',
  email: '',
  password: '',
}

function FormProfile() {

  const { formValues, handleInputChange } = useForm(initialState)
  const [error, setError] = React.useState<string | null>(null);
  const [registrationSuccess, setRegistrationSuccess] = React.useState<boolean>(false);


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password, nombre } = formValues;
    if (password.length < 6) {
      setError("la contraseña debe tener por lo menos 6 caracteres");
      return;
    }
    setError(null);
    const data = {
      email: email,
      password: password
    };
    // Add user in users table
    const result = await signUpWithEmail(data);

    console.log("resultadok", result)
    if (result) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log("ERROR: ", error)
      if (data) {
        const user = {
          id: data.user?.id,
          nombre: nombre
        };
        console.log("DATA: ", data)
        console.log("user ingresado al if: ", user)
        // Add user's profile in profiles table
        setRegistrationSuccess(true);
        await updateProfile(user);
      } else {
        console.error("User is null, unable to access id property");
      }
    }

  };

  return (
    <div className="reservation-form">
      <h2 className="">Registrar Usuario</h2>
      {registrationSuccess ? (
        <div className="success">Registro exitoso</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="reservation-form">
            <label htmlFor="nombre">Nombres:</label>
            <input type="text" name='nombre' value={formValues.nombre} onChange={handleInputChange} />
          </div>
          <div className="reservation-form">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={formValues.email} onChange={handleInputChange} />
          </div>

          <div className="reservation-form">
            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={formValues.password} onChange={handleInputChange} />
          </div>

          <div className="reservation-form">
            <label htmlFor="Propietario" className="form-label">¿Es propietario de un restaurante?: <i className="fab fa-font-awesome-alt"></i></label>
            <input type="checkbox" name='es_propietario' value={formValues.es_propietario} onChange={handleInputChange}></input>
          </div>
          {error && <div className="error">{error}</div>}
          <button className="action-button" >Registrar</button>
        </form>
      )}
    </div>

  );
};

export default FormProfile;

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



