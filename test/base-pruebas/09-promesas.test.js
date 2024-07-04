import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Se prueba 09-promesas', () => { 
    test("getHeroeByIdAsync debe retornar un heroe", (done) => {
        const id = 1;
        const heroeAsync = getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner:'DC'
                })
                done()
            })
    });

    test("getHeroeByIdAsync debe retornar un error si el heroe no existe", (done) => {
        const id = 300;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done()
            })
            .catch(error => {
                expect(error).toBe( `No se pudo encontrar el héroe ${id}` )
                done()
            })
    });
})