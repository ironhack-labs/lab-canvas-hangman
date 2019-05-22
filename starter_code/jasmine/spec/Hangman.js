describe('Juego hangman', function () {


    describe('Configuracion de juego', function () {

        it('La lista de palabras posibles existe', function () {
            expect(typeof ConfigJuego.getlistaPalabrasPosibles).toBe("function");
        });

        it('La lista de palabras es de almenos 2 elmentos', function () {
            expect(ConfigJuego.getlistaPalabrasPosibles().length).toBeGreaterThan(2);
        });

        it('Existe una funcion para tener una palabra random', function () {
            expect(typeof ConfigJuego.getRandomPalabra).toBe("function");
        });

        it('La funcion para tener una palabra random - regresa string', function () {
            expect(typeof ConfigJuego.getRandomPalabra()).toBe("string");
        });

        it('La funcion para tener una palabra random no regresa 2 veces la misma palabra', function () {


            let p1 = ConfigJuego.getRandomPalabra();
            let p2 = ConfigJuego.getRandomPalabra();
            let p3 = ConfigJuego.getRandomPalabra();
            expect(p1 === p2).toBeFalsy();
            expect(p1 === p3).toBeFalsy();
            expect(p2 === p3).toBeFalsy();
        });

    });


    describe('Proceso de Juego"', function () {

        let juego = new Juego("ecologia");


        it('Evaluacion de estado inicial - usando palabra ecologia', function () {

            let palabra = juego.getPalabraOculta();

            expect(typeof palabra).toBe('string');

            //la palabra que usamos
            expect(palabra === 'ecologia').toBeTruthy();

            //la palabra oculta
            expect(typeof juego.listaLetrasPalabraOculta).toBe('array');
            expect(juego.listaLetrasPalabraOculta.length).toBe(8);
            expect(juego.listaLetrasPalabraOculta.join('')).toBe("ecologia");


            //la palabra adivinada
            expect(typeof juego.listaLetrasPalabraAdivinada).toBe('array');
            expect(juego.listaLetrasPalabraAdivinada.length).toBe(8);
            expect(juego.listaLetrasPalabraOculta.join('')).toBe("________");


            //lista de letras intentadas
            expect(typeof juego.listaLetrasIntentadas).toBe('array');
            expect(juego.listaLetrasIntentadas.length).toBe(0);


            expect(typeof juego.listaLetrasPalabraAdivinada).toBe('array');

        });

    });


    // describe('Check if is a letter', function () {
    //     it('checkIfLetter should be a function', function () {
    //         expect(typeof (juego.checkIfLetter)).toBe('function');
    //     });
    //
    //     it('checkIfLetter should receive a number', function () {
    //         expect(typeof (juego.checkIfLetter)).toBe('function');
    //     });
    //
    //     it('checkIfLetter should return a boolean', function () {
    //         var keyCode = 43;
    //         juego.checkIfLetter(keyCode);
    //         expect(typeof (keyCode)).toBe('number');
    //     });
    //
    //     it('checkIfLetter should return false', function () {
    //         expect(juego.checkIfLetter(43)).toEqual(false);
    //     });
    //
    //     it('checkIfLetter should return true', function () {
    //         expect(juego.checkIfLetter(76)).toEqual(true);
    //     });
    // });

});
