import React from 'react'
import Heading from "../sections/headingPages/HeadingHome";
import Testimonials from "../sections/headingPages/Testimonials";
import {logout} from '../../services/auth';
import Navigation from '../Navigation';


function Logout () {

  async function prueba2(){
    const data_user = await logout();
    console.log("USUARIO DESLOGUEADO ");        //OBTENGO EL USUARIO LOGUEADOOO
  }
  
  return (
    <>
      <Heading />
      {/* <Logout /> */}
      <main>
        <Testimonials name={''} description={''} />
      </main>
      <Navigation device="desktop" />
    </>
  );

};

export default Logout;