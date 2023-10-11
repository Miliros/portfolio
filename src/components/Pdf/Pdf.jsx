import React from "react";
import cv from "./Milagros Rosales C.V.pdf";

export default function Pdf() {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={cv}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
}
