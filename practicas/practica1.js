/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

palabra = "Hola Mundo"



console.log("1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion('Hola Mundo') devolverá 10.")

function ContarCaracteres (palabra){
    palabra = palabra.length
    return palabra
}
console.log("CONLUSION:")
console.log(`la palabra a contar sera`, ContarCaracteres(palabra))
console.log("--------------------------")


console.log("2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion('Hola Mundo', 4) devolverá 'Hola'.")

function MostrarCaracteres(){
    palabra = palabra.slice(0,4)
    return palabra
}

console.log("CONLUSION:")
console.log("LA Cantidas en salir es:", MostrarCaracteres(palabra))
console.log("--------------------------")



console.log("3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].")

function SepararPorSpacios(oracion){
    oracion= oracion.split(" ")
    return oracion
}

oracion = "hola que tal, como estas?"

console.log("CONLUSION:")
console.log("Separacion de letras: ", SepararPorSpacios(oracion))
console.log("--------------------------")


console.log("4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.")

function RepetidorDeText(texto, cantidad){
    for(i = 1; i <= cantidad; i ++){
        console.log(`${texto} es: ${i}`)
        
    }
}

cantidad = 3
texto = "Hola Mundo"
console.log(RepetidorDeText(texto, cantidad))

console.log("--------------------------------------CORRECCION-------------------------------------------------------------")

function ContarCaracteresMejorado(informacion = ""){
    if(!informacion){
        console.warn("ALERTA: No se a ingresado una cadena")
    }
    else{
        console.info(`Tu palabra ${informacion} tiene al cantidad de: ${informacion.length} Caracteres  `)
    }
}
informacion = "Hola mundo"
ContarCaracteresMejorado(informacion)



const ContadorCadena = (cadena = "") => 
    (!cadena) 
        ? console.warn("ALERTA: No se a ingresado una cadena") 
        : console.info(`Tu palabra ${cadena} tiene al cantidad de: ${cadena.length} Caracteres `)

cadena = "Hola mundo"
ContarCaracteresMejorado(cadena)


console.log("--------------------------------------CORRECCION-------------------------------------------------------------")


const RecortarTecto = (cadena = "", longitud = undefined) => 
    (!cadena) 
        ? console.warn("ALERTA: No se a ingresado una cadena") 
        : (longitud === undefined)
            ? console.warn("ALERTA: No se a ingresado un valor numerico") 
            : console.info(`Tu palabra ${cadena} se redujo a esta cantidad: ${cadena.slice(0,longitud)}`)

RecortarTecto("hola mundo", 4)
RecortarTecto("hola como estas",6)

RecortarTecto("",6)
RecortarTecto("hola como estas",)

console.log("--------------------------------------CORRECCION-------------------------------------------------------------")

const SeparacionArray = (cadena = "", separador = undefined) => 
    (!cadena) 
        ? console.warn("ALERTA: Te falto ingresar la cadena de texto") 
        : (separador === undefined)
            ? console.warn("ALERTA!!: Falta que des tu deparador")
            : console.info( cadena.split(separador))

SeparacionArray("HOAL COMO ESTAS INTELIGENTE", " ")


console.log("--------------------------------------CORRECCION-------------------------------------------------------------")

const RpetirTexto = (textoinf = "", NUmVeces = undefined) => {
    if(!textoinf) return console.warn("No ingresaste el texto");
    if(NUmVeces === undefined) return console.warn("No se ha registrado el numero")
    if(NUmVeces === 0) return console.warn("El numero de repeticiones no puede ser un 0")
    if(Math.sign(NUmVeces) === -1) return console.warn("No se ha registrado no puede ser negativo")
    
    for(let i = 1; i <= NUmVeces; i ++) console.info(`${textoinf} es: ${i}`)
}

const textito = "Hola mundo como estas?"
RpetirTexto(textito, 8)