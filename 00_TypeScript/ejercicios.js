/*
    1)
    Un alumno desea saber cual sera su calificacion final en la materia de JS.
    Dicha calificacion se compone de los siguientes porcentajes:
    * 55% del promedio de sus tres calificaciones parciales.
    * 30% de la calificacion del examen final.
    * 15% de la calificacion de un trabajo final.
*/
console.log("Calificación final: ");
let primeraCalificacion = 8; //Inferencia de tipos
let segundaCalificacion = 9;
let terceraCalificacion = 8.7;
let media = (primeraCalificacion + segundaCalificacion + terceraCalificacion) / 3;
let examenFinal = 8.5; //Inferencia de tipos
let trabajoFinal = 10;
let calificacionFinal = (media * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
console.log(calificacionFinal);
/*
    2)
    Crear un array con varios nombres de videojuegos, imprimir todos los
    videojuegos menos los videojuegos con el nombre de "Mario"
*/
console.log("Videojuegos: ");
let videojuegos = ["Mario Kart", "Super Mario Bros", "Elder Ring", "League Of Legends", "Spider-man", "Mario Party", "Batman"];
const palabra = 'Mario';
for (let i = 0; i < videojuegos.length; i++) {
    if (!videojuegos[i].includes(palabra)) {
        console.log(videojuegos[i]);
    }
}
/*
    3)
    Crea una aplicacion que dado un número, calcule su factorial
    Podeis hacer los tres ejercicios sobre el mismo fichero.ts
    Crearos el fichero tsconfig.json y hacer que se compile automáticamente.
    Compilarlo con la version es6
*/
let numero = 10;
console.log("Factorial de " + numero);
let acumulado = 1; //Inferencia de tipos
for (let i = 1; i <= numero; i++) {
    acumulado *= i;
}
console.log(acumulado);
