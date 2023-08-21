import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Proyects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
