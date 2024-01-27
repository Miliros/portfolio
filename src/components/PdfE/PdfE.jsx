import React from "react";
import cv from './MilagrosRosC.V.pdf';

export default function PdfE() {
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
