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

        it('El numero de errores del edo ini es 0', function () {
            expect(juego.numError).toBe(0);
        });




    });

    describe('Secuencia de Juego - juego ganador', function () {

        let palabraOcultaTest = "cascada";

        let juego = new Juego(palabraOcultaTest);


        it('Jugada 1 - Letra no existe - x', function () {

            let resultadoTurno = juego.ejecutarJugada("x");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(1);
            expect(juego.listaLetrasIntentadas[0]).toBe("x");

            expect(typeof resultadoTurno).toBe('object');


            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /* un inenro menos disponible r*/
            expect(resultadoTurno.numErrores).toBe(1);

            /* la palabra adivinada sigue sin cambiar 7 letas*/
            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("_______");

        });

        it('Jugada 1 - Volver a juagar la misma letra - x ', function () {

            let resultadoTurno = juego.ejecutarJugada("x");

            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada no es exitosa */
            expect(resultadoTurno.success).toBeFalsy();

            /*recibimos mensaje*/
            expect(typeof resultadoTurno.msg).toBe("string");
            expect(resultadoTurno.msg.length > 0).toBeTruthy();


            /* el numero de letras sigue siendo el mismo */
            expect(juego.listaLetrasIntentadas.length).toBe(1);
            expect(juego.listaLetrasIntentadas[0]).toBe("x");


            /* es el mimo numero de eeroes , no se conisderó como juegada */
            expect(resultadoTurno.numErrores).toBe(1);

            /* la palabra adivinada sigue sin cambiar 7 letas*/
            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("_______");
        });


        it('Jugar 2 - letra con 1 coincidencia - s ', function () {


            let resultadoTurno = juego.ejecutarJugada("s");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(2);
            expect(juego.listaLetrasIntentadas[0]).toBe("x");
            expect(juego.listaLetrasIntentadas[1]).toBe("s");



            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /* solo hemos tenido un error r*/
            expect(resultadoTurno.numErrores).toBe(1);

            expect(juego.listaLetrasPalabraAdivinada[2]).toBe("s");


            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("__s____");


        });

        it('Jugada 3 - letra con 2 coincidencia - c ', function () {


            let resultadoTurno = juego.ejecutarJugada("c");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(3);
            expect(juego.listaLetrasIntentadas[0]).toBe("x");
            expect(juego.listaLetrasIntentadas[1]).toBe("s");
            expect(juego.listaLetrasIntentadas[2]).toBe("c");



            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /* seguimos con un solo error*/
            expect(resultadoTurno.numErrores).toBe(1);

            expect(juego.listaLetrasPalabraAdivinada[2]).toBe("s");


            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("c_sc___");


        });



        it('Jugada 4 - letra que non existe  -h ', function () {

            let resultadoTurno = juego.ejecutarJugada("h");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(4);
            expect(juego.listaLetrasIntentadas[3]).toBe("h");


            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /*tenemos otro error*/
            expect(resultadoTurno.numErrores).toBe(2);


            /* la palabra adivinada no cambia*/

            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("c_sc___");
        });



        it('Jugada 5 - Jugar letra que existe  -d ', function () {

            let resultadoTurno = juego.ejecutarJugada("d");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(5);
            expect(juego.listaLetrasIntentadas[4]).toBe("d");


            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.on_play);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();

            /* el mimso numero de errores */
            expect(resultadoTurno.numErrores).toBe(2);


            /* la palabra adivinada no cambia*/

            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("c_sc_d_");
        });

        it('Jugada 6 - Jugada ganadora - a ', function () {

            let resultadoTurno = juego.ejecutarJugada("a");

            /* se almacena la letra en letras intentadas*/
            expect(juego.listaLetrasIntentadas.length).toBe(6);
            expect(juego.listaLetrasIntentadas[5]).toBe("a");


            /*cambioo de estado del juego a ganador*/
            expect(resultadoTurno.estadoJuego).toBe(ConfigJuego.estados.end_win);

            /* la juugada es exitosa porque no genero error*/
            expect(resultadoTurno.success).toBeTruthy();


            /* la palabra adivinada completa*/

            let pad = juego.getPalabraAdivinada();
            expect(pad).toBe("cascada");
        });


    });


    describe('Secuencia de Juego - juego perdedor', function () {

        let palabraOcultaTest = "paz";

        let juego = new Juego(palabraOcultaTest);


        it(`Jugada 1 - Letra no existe - b`, function () {
            let resultadoTurno = juego.ejecutarJugada('b');
            expect(resultadoTurno.numErrores).toBe(1);
        });

        it(`Jugada 2 - Letra no existe - c`, function () {
            let resultadoTurno = juego.ejecutarJugada('c');
            expect(resultadoTurno.numErrores).toBe(2);
        });

        it(`Jugada 3 - Letra no existe - d`, function () {
            let resultadoTurno = juego.ejecutarJugada('d');
            expect(resultadoTurno.numErrores).toBe(3);
        });

        it(`Jugada 4 - Letra no existe - e`, function () {
            let resultadoTurno = juego.ejecutarJugada('e');
            expect(resultadoTurno.numErrores).toBe(4);
        });

        it(`Jugada 5 - Letra no existe - f`, function () {
            let resultadoTurno = juego.ejecutarJugada('f');
            expect(resultadoTurno.numErrores).toBe(5);
        });

        it(`Jugada 6 - Letra no existe - g`, function () {
            let resultadoTurno = juego.ejecutarJugada('g');
            expect(resultadoTurno.numErrores).toBe(6);
        });

        it('Jugada 7 Perdedora - Letra no existe - x', function () {

            let resultadoTurno = juego.ejecutarJugada("x");

            expect(resultadoTurno.numErrores).toBe(7);
            expect(resultadoTurno.estadoJuego ===ConfigJuego.estados.end_loose);

        });



    });
});


