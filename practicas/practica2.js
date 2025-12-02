/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/


console.log("5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion('Hola Mundo') devolverá 'odnuM aloH'.")

console.log("RESPUESTA:")

const InvertirCadena = (cadena = "") => (!cadena) ? console.warn("Necesitas agregar un apalabra o oracion") : console.info(`SU palabra es : ${cadena}, Pero su inversa es : ${cadena.split("").reverse()}`)

InvertirCadena("Hola Mundo")


function InversaFor(cadena = "", reservas = ""){
    for(let i = cadena.length - 1; i >= 0; i--){
        reservas += cadena[i]

    }
    console.log(reservas)
}

InversaFor("Hola Mundo")

console.log("6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion('hola mundo adios mundo", "mundo') devolverá 2..")

console.log("RESPUESTA:")



console.log("7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion('Salas') devolverá true.")

console.log("RESPUESTA:")

const Polindrome = (Palabra = "") => (!Palabra) ? console.warn("INGRESE LA PALABRA") : console.log("PALABRA RESIBIDA")

function Polindromo(PalabraP = "", ReservaP = ""){    

    let PalabraP2 = PalabraP.toUpperCase().replace(/\s+/g, "")

    for (let i = PalabraP2.length -1; i >= 0 ; i--){
        ReservaP += PalabraP2[i]
    }
    
    if(PalabraP2 === ReservaP){
        console.info("La palabra es un polindormo")
    }
    else{
        console.info("La palabra no es un polindromo")  
    }
    console.log("Original procesada:", PalabraP2);
    console.log("Invertida:", ReservaP);

}

Polindromo("A MAMA ROMA LE AVIVA EL AMOR A MAMA")


console.log("8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'') devolverá  '1, 2, 3, 4 y 5.'")

console.log("RESPUESTA:")