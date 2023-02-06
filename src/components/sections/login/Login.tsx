import React from "react";
import useForm from '../../../hooks/useForm'
import { signInWithEmail } from '../services/auth'

const initialState = {
  email: '',
  password: ''
}

function FormLogin() {

  const { formValues, handleInputChange } = useForm(initialState)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formValues;
    await signInWithEmail(email, password);
  };
console.log()

  return (
    <>
      <body>
        <div className="reservation-form">
          <h2 className="">Login</h2>
          <form onSubmit={handleSubmit}>

          <div className="reservation-form">
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' value={formValues.email} onChange={handleInputChange} />
          </div>

          <div className="reservation-form">
            <label htmlFor="password">Password:</label>
            <input type="text" name='password' value={formValues.password} onChange={handleInputChange} />
          </div>

          <button className="action-button" >Login</button>
          </form>
        </div>


      </body>
    </>


  )
}

export default FormLogin;


  /*
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    console.log("USUARIO: ", supabase.auth.user());
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log("EMAILLLLLL: ", email);
      try {
        const result = await supabase.auth.signIn({
          email,
        })
      } catch (error) {
        console.error(error)
      }
    };
  */