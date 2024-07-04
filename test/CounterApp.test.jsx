import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba de CounterApp', () => {
  // *******************************************************
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });
  // *******************************************************
  test("debe de mostrar el valor inicial de 73", () => {
    render(<CounterApp value={73} />);
    expect(screen.getByText(73)).toBeTruthy();
  });
  // *******************************************************
  test("debe incrementar con el boton +1", () => {
    render(<CounterApp value={73} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(74)).toBeTruthy();
  });
  // *******************************************************
  test("debe decrecer con el boton -1", () => {
    render(<CounterApp value={73} />);
    fireEvent.click(screen.getByRole("button", {name: '- 1'}));
    expect(screen.getByText("72")).toBeTruthy();
  });
  // *******************************************************
  test("el boton reset debe funcionar", () => {
    render(<CounterApp value={73} />);
    fireEvent.click(screen.getByRole("button", { name: "- 1" }));
    fireEvent.click(screen.getByRole("button", { name: "- 1" }));
    fireEvent.click(screen.getByRole("button", { name: "- 1" }));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("73")).toBeTruthy();

  });
})