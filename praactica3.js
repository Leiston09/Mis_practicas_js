/*programa una funcion qu etenga un numero aletario dentre 501 y 600*/
const NumAleatorio = () => console.info(Math.round(Math.random()*(600 - 501 + 1) + 501))

NumAleatorio()