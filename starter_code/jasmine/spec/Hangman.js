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

            //Esto deberia hacerse con un array para probar que hasta n-1 intentos no hay repeticion
            let p1 = ConfigJuego.getRandomPalabra();
            let p2 = ConfigJuego.getRandomPalabra();
            let p3 = ConfigJuego.getRandomPalabra();
            expect(p1 === p2).toBeFalsy();
            expect(p1 === p3).toBeFalsy();
            expect(p2 === p3).toBeFalsy();
        });

    });


    describe('Inicializacion  Juego"', function () {

        let juego = new Juego("ecologia");


        it('La palabra oculta se guarda y se cnvierte en un arrya de letras', function () {

            let palabra = juego.getPalabraOculta();

            expect(typeof palabra).toBe('string');

            //la palabra que usamos
            expect(palabra).toBe("ecologia");

            //la palabra oculta
            expect(typeof juego.listaLetrasPalabraOculta).toBe('object');
            expect(juego.listaLetrasPalabraOculta.length).toBe(8);
            expect(juego.listaLetrasPalabraOculta.join('')).toBe("ecologia");

        });


        it('La palabra adivinada tiene el mismo numero de letras y se cera un arra', function () {

            //la palabra adivinada
            expect(typeof juego.listaLetrasPalabraAdivinada).toBe('object');
            expect(juego.listaLetrasPalabraAdivinada.length).toBe(8);
            expect(juego.listaLetrasPalabraAdivinada.join('')).toBe("________");
        });


        it('Las letras intentadas son un array vacio', function () {

            //lista de letras intentadas
            expect(typeof juego.listaLetrasIntentadas).toBe('object');
            expect(juego.listaLetrasIntentadas.length).toBe(0);

        });

    });


});
