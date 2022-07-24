/* En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().*/
/*** Resolución ***/

function join (arr){
    let arrNew = ""
    for(i=0;i<arr.length;i++){
        arrNew+=(arr[i])
    }
    return arrNew
}

join(["h","o","l","a"])  //Para testear: debe retornar el string "hola"
join(["c","h","a,"u"]) //Para testear: debe retornar el string "chau"
