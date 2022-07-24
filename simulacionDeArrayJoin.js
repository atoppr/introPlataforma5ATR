/* En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().
⚠️Importante: No podés usar el método Array.join() original.
Por ejemplo:
join(["h","o","l","a"]) debe retornar el string "hola".
join(["c","h","a,"u"]) debe retornar el string "chau". */

/*** Resolución ***/

function join (arr){
    let arrNew = ""
    for(i=0;i<arr.length;i++){
        arrNew+=(arr[i])
    }
    return arrNew
}

join(["c","h","a","u"])  //Para testear: debe retornar el string "hola"
join(["c","h","a,"u"]) //Para testear: debe retornar el string "chau"
