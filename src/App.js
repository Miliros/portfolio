import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Pdf from "./components/Pdf/Pdf";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Render from "./components/Render/Render";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Render />} />
        <Route exact path="/pdf" element={<Pdf />} />
      </Routes>
    </>
  );
}

export default App;
