import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

const title = "title: Soy un default value property";
const subTitle = "subtitle: soy un default prop";
const propValue = 5;

describe("Prueba en FirstApp", () => {
  // *******************************************************
  test("debe hacer match con el snapshot", () => {
    const { container } = render(
      <FirstApp propValue={propValue} subTitle={subTitle} />
    );
    expect(container).toMatchSnapshot();
    screen.debug();
  });

  // *******************************************************
  test('debe de mostrar el mensaje "title: Soy un default value property"', () => {
    render(
      <FirstApp title={title} propValue={propValue} subTitle={subTitle} />
    );
    expect(screen.getByText(title)).toBeTruthy();
  });

  // *******************************************************
  test("el titulo debe mostrarse con h1", () => {
    render(
      <FirstApp title={title} propValue={propValue} subTitle={subTitle} />
    );
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  // *******************************************************
  test("debe de mostrar el subtitulo enviado por props", () => {
    render(
      <FirstApp title={title} propValue={propValue} subTitle={subTitle} />
    );
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
