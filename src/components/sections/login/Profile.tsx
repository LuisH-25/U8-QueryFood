import React from "react";
import { supabase } from '../services/config'
import useForm from '../../../hooks/useForm'
import { signUpWithEmail, updateProfile } from '../services/auth'
import { FormValues } from "../../../interface/queryfood";

const initialState: FormValues = {
  nombre: '',
  email: '',
  password: ''
}

function FormProfile() {

  const { formValues, handleInputChange, reset } = useForm(initialState)
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, nombre } = formValues;
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
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
      const user : any = supabase.auth.user();
      if (user) {
        const data = {
          id: user.id,
          name: nombre
        };
        // Add user's profile in profiles table
        await updateProfile(data);
      } else {
        console.error("User is null, unable to access id property");
      }
    }

  };

  return (
    <div className="reservation-form">
      <h2 className="">Registrar Usuario</h2>
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
      {error && <div className="error">{error}</div>}
      <button className="action-button" >Registrar</button>
    </form>
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



