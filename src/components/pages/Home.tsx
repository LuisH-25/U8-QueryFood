import React from 'react'
import Heading from "../sections/headingPages/HeadingHome";
import Testimonials from "../sections/headingPages/Testimonials";

function Homepage () {
  return (
    <>
      <Heading />
      <main>
        <Testimonials calificacion={0} comentario={""} />
      </main>
    </>
  );
};

export default Homepage;