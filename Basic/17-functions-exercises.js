/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function myfun(a,b){
    console.log(a+b)
}
myfun(5,4)
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let contador=0

let array1 = [1 , 10 , 5 , 8]

array1.forEach( (numero) => {
    if (numero > contador){
    contador = numero   
    }

})

console.log( "el numero mayor es: " + contador)


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function cadena (vocales){
    let i=0
    for (let value of vocales){
        if (value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
                i++
            }
        }
        
        return i
    }

    let result=cadena("aaaaa")
    console.log(result)


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    let mayus = (valores) => {
        let toUppercase1=[]
        for (let i = 0 ; i < valores.length ; i++){
          toUppercase1.push(valores[i].toUpperCase())
        }
        return toUppercase1
    }

    let result2 = mayus("hola")
    console.log(result2)
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function arrays (array1, array2){
    let nuevoarray2 = []

    for (let d = 0 ; d < array1.length ; d++){

        for (let r =0 ; r < array2.length; r++){
                if (array1[d] === array2[r]){
                    nuevoarray2.push(array1[d])
                    break
                }
            }
    
        }
        return nuevoarray2
}

let result3= arrays([1,2,3,4,"a"],[1,5,7,4,2,"a"])

console.log(result3)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let nuevo= (valor1) => {
 let sumador = 0
 for (let val of valor1) {
    if ((val % 2) == 0 ){
        sumador += val
    }
 }
 return sumador
}

let result4 = nuevo([1,2,4,8,5,6])
console.log(result4)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let change1 = (potencia) =>{
    let arraynew= []
    for (let hacer of potencia){
        arraynew.push(hacer * hacer)
    }
    return arraynew
}
let result5= change1([2,1,4,5])
console.log(result5)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let inverso = (palabra) => {
    let words = palabra.split("")
    let arreglo =[]
    
    for (let h = words.length - 1; h >=0; h--){
        arreglo.push(words[h])
    }

    return arreglo.join("")
}

let result6= inverso("hola amigo")
console.log(result6)



// 10. Crea una función que calcule el factorial de un número dado