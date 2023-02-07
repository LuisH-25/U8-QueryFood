import React from 'react'
import Abouts from "../sections/headingPages/About";
import Testimonials from "../sections/headingPages/Testimonials";

function About() {
  return (
    <>
      <main >
        <Abouts />
        <Testimonials name={""} description={""} />
      </main>
    </>
  );
}
export default  About; 
