/* En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de números y devuelva la suma de todos ellos. */
/*** Resolución ***/

function sumArray(arr){
     console.log(arr.reduce((total, num) => total + num, 0))
}


//Usá este código para testear tu Función:
sumArray([1,2,3]) // 6
sumArray([10, 3, 10, 4]) // 27
sumArray([-5,100]) // 95
