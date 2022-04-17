import React from "react";

const AlCuadrado = ({ value }) => {
  if (typeof value === "undefined") {
    return <div>Error: No se recibió ningún valor</div>;
  } else if (typeof value !== "number") {
    return <div>Error: El valor ingresado no es numérico</div>;
  } else {
    return (
      <div>
        El cuadrado de {value} es {value ** 2}
      </div>
      // <div style={{ visibility: "hidden" }}>
      //   El cuadrado de {value} es {value ** 2}
      // </div>
    );
  }
};

export default AlCuadrado;
