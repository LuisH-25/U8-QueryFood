import { useState } from "react";
import useForm from "../../../hooks/useForm";
import { logout, signInWithEmail } from "../../../services/auth";

const initialState = {
  email: "",
  password: ""
};

const handleLogout = async () => await logout();

function FormLogin() {
  const [message, setMessage] = useState("");
  const { formValues, handleInputChange } = useForm(initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValues;
    const result = await signInWithEmail(email, password);

    if (result.data && result.data.user) {
      setMessage("El usuario está registrado y ha iniciado sesión con éxito");
    } else {
      setMessage("El usuario no está registrado, por favor regístrese");
    }
    window.location.href = "/";
  };


  return (
    <>
      <body>
        <div className="reservation-form">
          <h2 className="">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="reservation-form">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="reservation-form">
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>
            {message && <p>{message}</p>}
            <button className="action-button">Login</button>
          </form>
        </div>
      </body>
    </>
  );
}

export default FormLogin;
