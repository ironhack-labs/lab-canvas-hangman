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


    describe('Inicializacion  Juego', function () {

        let juego = new Juego("ecologia");


        it('La palabra oculta se guarda y se convierte en un array de letras', function () {

            let palabra = juego.getPalabraOculta();

            expect(typeof palabra).toBe('string');

            //la palabra que usamos
            expect(palabra).toBe("ecologia");


            //la palabra oculta como array
            expect(typeof juego.listaLetrasPalabraOculta).toBe('object');
            expect(juego.listaLetrasPalabraOculta.length).toBe(8);
            expect(juego.listaLetrasPalabraOculta.join('')).toBe("ecologia");

        });


        it('La palabra adivinada tiene el mismo numero de letras que la oculta y se hace array', function () {

            //la palabra oculta como string
            expect(typeof juego.getPalabraAdivinada).toBe('function');
            expect(typeof juego.getPalabraAdivinada()).toBe("string");
            expect(juego.getPalabraAdivinada()).toBe("________");


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

    describe('Turno de Juego"', function () {

        let palabraOcultaTest = "kilometro";

        let juego = new Juego(palabraOcultaTest);


        it('Jugada Letra no existe ', function () {

            let resultadoTurno = juego.ejecutarJugada("x");

            expect(typeof resultadoTurno).toBe('object');

           /*el juego esta continuanco - fu 1er intento*/
            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /* un inenro menos disponible r*/
            expect(resultadoTurno.numIntentosRestantes).toBe( ConfigJuego.numMaximoIntentos-1);

            /* la palabra adivinada sigue sin cambiar*/


        });




    });


});
