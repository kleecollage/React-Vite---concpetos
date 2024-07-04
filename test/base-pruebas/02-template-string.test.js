import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02-template-strng', () => { 
    test('getSaludo debe retornar "Hola Fernando"', () => { 
        const name = 'Fernando';
        const msg = getSaludo(name);

        expect(msg).toBe(`Hola ${name}!!!`)
     })
 })