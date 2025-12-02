/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/


console.log("5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion('Hola Mundo') devolverá 'odnuM aloH'.")

console.log("RESPUESTA:")

const InvertirCadena = (cadena = "") => (!cadena) ? console.warn("Necesitas agregar un apalabra o oracion") : console.info(cadena.split("").reverse().join(""))

InvertirCadena("Hola Mundo")


function InversaFor(cadena = "", reservas = ""){
    for(let i = cadena.length - 1; i >= 0; i--){
        reservas += cadena[i]

    }
    console.log(reservas)
}

InversaFor("Hola Mundo")
console.log("------------------------------------")

console.log("6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion('hola mundo adios mundo", "mundo') devolverá 2..")

console.log("RESPUESTA:")

const BuscarEnTexto = (palabraEvaluar = "", oracion = "" ) => {
    if (!palabraEvaluar) return console.warn("NO INGRESASTE LA PALABRA A EVALUAR")
    if (!oracion) return console.warn("NO INGRESASTE EL TEXTO LARGO")
    
    let i = 0
    let contador = 0

    while(i !== -1){
        i = oracion.indexOf(palabraEvaluar, i)

        if (i !== -1){
            i++
            contador++
        }
    }
    return console.info(`La palabra ${palabraEvaluar} se repite ${contador} veces`)
}

BuscarEnTexto("Danna","Danna la mas celosa, y su hermana Danna es callada")






console.log("------------------------------------")



console.log("7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion('Salas') devolverá true.")

console.log("RESPUESTA:")

const Polindrome4 = (Palabra = "") => {
    if(!Palabra)return console.warn("INGRESE LA PALABRA") 
    Palabra = Palabra.toLowerCase()
    let PalabraGirada = Palabra.split("").reverse().join("")
    
    return (Palabra === PalabraGirada) 
    ? console.info(`La palabra es un polindormo porque la palabra original es: ${Palabra} y l apalabar al revez es: ${PalabraGirada}`)
    :console.info(`La palabra no es un polindormo porque la palabra original es: ${Palabra} y l apalabar al revez es: ${PalabraGirada}`)

    }

Polindrome4("HOLA MUNDO")
Polindrome4("Salas")


console.log("-----------------EEJRCCIO PRUEBA 1-------------------")

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
console.log("------------------------------------")


console.log("8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'') devolverá  '1, 2, 3, 4 y 5.'")

console.log("RESPUESTA:")

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto) 
        ? console.warn("NO ingresastes el texto")
        :(!patron)
            ? console.warn("No ingresaste el patron")
            : console.info(texto.replace(new RegExp(patron, "ig"),""))


eliminarCaracteres()
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xz")