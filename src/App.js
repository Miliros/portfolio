import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Pdf from "./components/Pdf/Pdf";
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
