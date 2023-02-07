import axios from 'axios';

export const loginRequest = async (correo:string,contrasena:string)=>{
  return axios.post("https://restaurantes-mu.vercel.app/usuario/login",{
    correo,
    contrasena
  })
}