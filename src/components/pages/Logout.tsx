import React from 'react'
import Heading from "../sections/headingPages/HeadingHome";
import Testimonials from "../sections/headingPages/Testimonials";
// import Logout from '../sections/login/Logout';
import { supabase } from "../../supabase/client";
import Navigation from '../Navigation';
function Logout () {
  try {
    console.log("USUARIO LOGOUTTTTT: ",  supabase.auth.signOut());
    supabase.auth.signOut();
  } catch (error) {
    alert("ocurrio un error inesperado");
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