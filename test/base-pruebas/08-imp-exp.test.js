import { any, number } from "prop-types";
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeByID debe retornar un heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner:'DC'
        })
    })
    
    test('getHeroeById debe retornar undfined si no existe', () => {
        const id = 100
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy() //toBeFalsy espera null, undefined o false
    })
    
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC';
        const heroByOwner = getHeroesByOwner(owner);
        heroByOwner.forEach(hero => {
            expect(hero).toEqual({
                id: expect.any(Number),
                name: expect.any(String),
                owner:'DC'
            }) 
        });
        expect(heroByOwner.length).toBe(3)
        expect(heroByOwner).toEqual(
            heroes.filter((heroe) => heroe.owner === owner)
        );
     })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel';
                const heroByOwner = getHeroesByOwner(owner);
                heroByOwner.forEach((hero) => {
                  expect(hero).toEqual({
                    id: expect.any(Number),
                    name: expect.any(String),
                    owner: 'Marvel',
                  });
                });
        expect(heroByOwner.length).toBe(2);
        expect(heroByOwner).toEqual(
          heroes.filter((heroe) => heroe.owner === owner)
        );

     })
 })