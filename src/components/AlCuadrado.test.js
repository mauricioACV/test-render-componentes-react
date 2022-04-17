import { render, screen } from "@testing-library/react";
import AlCuadrado from "./AlCuadrado";
import "@testing-library/jest-dom/extend-expect";

//1.-Si no se envía un valor, devuelve un mensaje indicandolo.
//2.-Si se envía un valor de tipo no numérico,devuelve un mensaje de error.
//3.-Si se envía un valor numérico, se debe obtener un mensaje
//indicando el valor y el cuadrado del mismo.

describe("Probando componente AlCuadrado", () => {
  test("Muestra un mensaje de error si es que no se envía un valor", () => {
    render(<AlCuadrado />);
    const errorMsg = screen.getByText(/ningún/gi);
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toBeVisible();
  });
  test("Muestra un mensaje de error si es que se envía un valor no numérico", () => {
    render(<AlCuadrado value={"A"} />);
    const mensajeDeError = screen.getByText(
      "Error: El valor ingresado no es numérico"
    );
    expect(mensajeDeError).toBeInTheDocument();
    expect(mensajeDeError).toBeVisible();
  });
  test("Muestra el valor y resultado si es que se envía un valor numérico", () => {
    render(<AlCuadrado value={3} />);
    const mensajeResultado = screen.getByText("El cuadrado de 3 es 9");
    expect(mensajeResultado).toBeInTheDocument();
    expect(mensajeResultado).toBeVisible();
  });
});
