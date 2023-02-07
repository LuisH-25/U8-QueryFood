import { useEffect } from "react";
import Heading from "../sections/headingPages/HeadingHome";
import Testimonials from "../sections/headingPages/Testimonials";
import { logout } from "../../services/auth";
import Navigation from "../Navigation";

function Logout() {
  useEffect(() => {
    logout();
    localStorage.clear();
    window.location.href = "/";
  }, []);

  return (
    <>
      <Heading />
      {/* <Logout /> */}
      <main>
        <Testimonials calificacion={0} comentario={""} />
      </main>
      <Navigation device="desktop" />
    </>
  );
}

export default Logout;
