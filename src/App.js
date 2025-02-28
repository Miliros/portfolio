import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Pdf from "./components/Pdf/Pdf";
import PdfE from "./components/PdfE/PdfE";
import { Routes, Route } from "react-router-dom";
import Render from "./components/Render/Render";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Render />} />
        <Route exact path="/pdf" element={<Pdf />} />
        <Route exact path="/pdfe" element={<PdfE />} />
      </Routes>
    </>
  );
}

export default App;
