import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Prueba en FirstApp", () => {
    // test("debe hacer match con el snapshot", () => {
    //     const propValue = 5;
    //     const subTitle = 'subTitle 2'
    //     const { container } = render(
    //         <FirstApp propValue={propValue} subTitle={subTitle} />
    //     );
    //     expect(container).toMatchSnapshot()
    // });
    
    test('debe de mostrar el titulo en un h1', () => {
        const title = "title: Soy un default value property";
        const subTitle = "subtitle: soy un default prop";
        const propValue = 5;
        const { container, getByText, getByTestId } = render(
            <FirstApp propValue={propValue} subTitle={subTitle} />
        );
        expect(getByText(title)).toBeTruthy();
        
        const h1 = container.querySelector('h1');
        console.log(h1.innerHTML)
        expect(h1.innerHTML).toContain(title)
        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('debe de mostrar el subtitulo enviado por props', () => { 
        const title = "title: Soy un default value property";
        const subTitle = "subTitle 2";
        const propValue = 5;
        const { getAllByText } = render(
            <FirstApp
                title={title}
                propValue={propValue}
                subTitle={subTitle}
            />
        );
        expect(getAllByText(subTitle).length).toBe(2);
     })
});
