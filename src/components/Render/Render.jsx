import React from "react";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Proyects from "../Proyects/Proyects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
export default function Render() {
  return (
    <div>
      <NavBar />
      <Home />
      <Proyects />
      <Skills />

      <Contact />
      <Footer />
    </div>
  );
}
