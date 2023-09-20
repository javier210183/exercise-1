/**
 * Part 1
 * Create a function that receives 2 strings. The second string must contain only a letter
 * It should return the number of times that letter (second parameter) is included in the string (first parameter).
 * It should not differentiate between uppercase and lowercase letters
 * Check that both parameters are strings and the second string is only 1 character. If there's an error, print a message and return -1 
 * Example: timesChar("Characteristic", "c") -> 3
 */
console.log("                     EXERCISE 1 - PART 1");

function verificarCadena(primerString, segundoChar) {
    // Verifica que ambos parámetros sean cadenas de texto
    if (typeof primerString !== 'string' || typeof segundoChar !== 'string') {
        console.log("Ambos parámetros deben ser cadenas de texto.");
        return -1;
    }

    // Verifica que el segundo parámetro sea exactamente un carácter
    if (segundoChar.length !== 1) {
        console.log("El segundo parámetro solo puede contener una letra.");
        return -1;
    }

    // Convierte ambas cadenas a minúsculas para hacer una comparación sin distinción de mayúsculas/minúsculas
    primerString = primerString.toLowerCase();
    segundoChar = segundoChar.toLowerCase();

    // Contamos el numero de caracteres que hay por string
    let contador = 0;
    for (let i = 0; i < primerString.length; i++) {
        if (primerString[i] === segundoChar) {
            contador++;
        }
    }

    return contador;
}

// Prueba
const ejercicio1Prueba1 = verificarCadena("paparruchadas", "p");
console.log("La letra seleccionada se repite : ",ejercicio1Prueba1 , " veces"); 

const ejercicio1Prueba2 = verificarCadena("tintoreria","T");
console.log("La letra seleccionada se repite : ",ejercicio1Prueba2," veces");


   
 
      
      
  
/**
 * Part 2
 * Create an array of strings.
 * Filter the array to include only the strings which their length is at least 5 characters
 * Transform all the strings in the filtered array to UPPERCASE
 * Print the resulting array, using ";" as the separator
 * Don't use traditional loops! (while, for, ...) 
 */
console.log("                       EXERCISE 1 - PART 2");

let alimentos = ["patata","pera","pimiento","pan","zanahoria","cafe","calabacin","lechuga","uva"];

function soloCincoLetras(alimentos){

return alimentos.length >= 5;
}

function alimentosResultado(alimentos){
    console.log(alimentos);
}

const palabrasFinal = alimentos.filter(soloCincoLetras);

    console.log("Palabras filtradas : ");
    palabrasFinal.forEach(alimentosResultado);

//console.log("este es el resultado" , palabrasFinal);
 function cambioMayusculas(palabrasFinal){
    return palabrasFinal.toUpperCase();
 }
    console.log("El array en mayusculas :")
const resultadoMayusculas = palabrasFinal.map(cambioMayusculas);
    console.log(resultadoMayusculas);


function remplazarCaracteresArray(array){
    return array.replace(",",";")
}
const resultadoCambioCaracteres = palabrasFinal.map(remplazarCaracteresArray);
 const FinalCaracteres = resultadoCambioCaracteres.join("; ");
 console.log("El array con los cambios de caracteres es :", FinalCaracteres);


/**
 * Part 3
 * Create a function that receives 3 parameters with default values (product -> "Generic product",
 * price -> 100, tax 21). Transform the product's name to string and the other 2 parameters to number.
 * If price or tax cannot be converted to number (NaN), show an error.
 * Finally, print the received product and the final price (including taxes) 
 * Call this function several times, omitting parameters or sending not numeric values.
 */
console.log("                           EXERCISE 1 - PART 3");


/*Crea una función que reciba 3 parámetros con valores por defecto (producto -> "Producto genérico", precio -> 100, impuesto 21). 
Transforma el nombre del producto a cadena de texto y los otros 2 parámetros a número. Si el precio o el impuesto no pueden ser convertidos a número (NaN),
 muestra un error. Finalmente, imprime el producto recibido y el precio final (incluyendo impuestos).
  Llama a esta función varias veces, omitiendo parámetros o enviando valores que no sean numéricos.*/


  function calcularPrecio(producto = "producto generico",precio,impuesto){
    let productoFinal = String(producto);
    let precioFinal = parseFloat(precio);
    let impuestoFinal = parseFloat(impuesto);

    if (isNaN(precioFinal) || isNaN(impuestoFinal)){
        console.error("los parametros especificados no son numeros");
    }
    let precioTotal = precioFinal+(precioFinal * impuestoFinal/100);
    console.log("El precio del producto : ", productoFinal ," es : ", precioTotal);
  }


  // Llama a la función con valores por defecto
calcularPrecio();

// Llama a la función con valores personalizados
calcularPrecio("Smartphone", 500, 18);

// Llama a la función con un valor no numérico para el impuesto
calcularPrecio("Laptop", 800, "veinte");

// Llama a la función omitiendo el precio
calcularPrecio("Tablet", undefined, 10);
/**
 * Part 4
 * Create an array with 4 values and do the following (use the correct array methods).
 * Add 2 elements at the beginning
 * Add 2 more at the end.
 * Delete positions 3,4 and 5
 * Insert 2 elements before the last element.
 * On each change, show the resulting array with its elements separated by '=>' (don't use any loop).
 */
console.log("                       EXERCISE 1 - PART 4");

//Crea un array con 4 valores y realiza lo siguiente (utiliza los métodos de array correctos).

//Agrega 2 elementos al principio.
//Agrega 2 elementos más al final
//Elimina las posiciones 3, 4 y 5
//Inserta 2 elementos antes del último elemento.
//En cada cambio, muestra el array resultante con sus elementos separados por '=>' (no utilices ningún bucle).

let arrayNumeros = [1,2,3,4,5];

arrayNumeros.unshift(-1,0);
console.log("agregados los numeros al principio",arrayNumeros);

arrayNumeros.push(6,7);
console.log("agregados los numeros al final",arrayNumeros);

arrayNumeros.splice(3,4,5);
console.log("eliminadas las posiciones 3,4 y 5 ",arrayNumeros);

arrayNumeros.splice(arrayNumeros.length - 1, 0, 8, 9);
console.log("Insertados 8 y 9 antes del último elemento", arrayNumeros);

console.log(arrayNumeros.join(" => "));




/**
 * Part 5
 * Create an array with several strings. Using the reduce method, return a string
 * that is a concatenation of the first letter of every string in the array.
 */

console.log("                       EXERCISE 1 - PART 5");

/*Crea un array con varias cadenas de texto. Utilizando el método reduce,
 devuelve una cadena de texto que es una concatenación de la primera letra
  de cada cadena en el array.*/

  function concatenarPrimerasLetras(acumulador, cadena) {
    return acumulador + cadena[0];
  }
  
  const arrayCadenas = ["Hola", "Ola", "Lagarto", "Ascensor"];
  
  const primeraLetraConcatenada = arrayCadenas.reduce(concatenarPrimerasLetras, "");
  
  console.log(primeraLetraConcatenada); 
  





/**
 * Part 6
 * Create an array with several strings. Using the reduce method, return the total length of all the strings.
 */
console.log("                       EXERCISE 1 - PART 6");

//Crea un array con varias cadenas de texto. Utilizando el método reduce, 
//devuelve la longitud total de todas las cadenas.



function calcularLongitudTotal(acumulador, cadena) {
    return acumulador + cadena.length;
  }
  
  const arrayCadenas1 = ["Cocodrilo", "Payaso", "Oca", "Mesa"];
  
  const longitudTotal = arrayCadenas1.reduce(calcularLongitudTotal, 0);
  
  console.log("Longitud total de todas las cadenas:", longitudTotal);
  

////////////////////////////////////////////////

/**
 * Part 7
 * Create a function that receives an array and adds the first three numbers of the array.
 * Use array destructuring in the parameters to get those three numbers.
 * If any of those numbers is not present in the array, a default value of 0 will be assigned
 * Return the result of adding those three numbers
 */
console.log("                       EXERCISE 1 - PART 7");


/*Crea una función que reciba un array y sume los primeros tres números del array.
Utiliza la desestructuración de arrays en los parámetros para obtener esos tres números.
Si alguno de esos números no está presente en el array, se asignará un valor predeterminado de 0.
Devuelve el resultado de sumar esos tres números.*/

function sumaTresPrimerosNumeros(arr){

    const [numero1 = 0, numero2 = 0, numero3 = 0] = arr;

    const resultadoSuma = numero1 + numero2 + numero3;

    return resultadoSuma;
}

const arraySuma =[10,20,30,40,50];
const pruebaSuma = sumaTresPrimerosNumeros(arraySuma);
console.log("El resultado de sumar los tres priemros numeros es :", pruebaSuma);



/**
 * Part 8
 * Create a funcion that can receive as many numbers as you want by parameter. Use rest to group them in
 * an array and print the ones that are even and the ones that arre odd separately. 
 * DON'T use loops (for, while, etc.)
 * Call this function several times with different values.
 */
console.log("                       EXERCISE 1 - PART 8");

/*Crea una función que pueda recibir la cantidad de números que desees como parámetros. 
Utiliza la característica "rest" para agruparlos en un array e imprime por separado aquellos
que son pares y los que son impares.
NO uses bucles (for, while, etc.).
Llama a esta función varias veces con diferentes valores.*/



function esPar(numero) {
    return numero % 2 === 0;
  }
  
  function esImpar(numero) {
    return numero % 2 !== 0;
  }
  
  function separarNumerosParesEImpares(...numeros) {
    const numerosPares = numeros.filter(esPar);
    const numerosImpares = numeros.filter(esImpar);
  
    console.log("Números Pares:", numerosPares);
    console.log("Números Impares:", numerosImpares);
  }
  
  // Llama a la función con diferentes valores
  separarNumerosParesEImpares(1, 2, 3, 4, 5, 6);
  separarNumerosParesEImpares(10, 15, 22, 37, 48);
  


/**
 * Part 9
 * Create a Map object. The key will be a student name, and the value an array with all his/her exam marks.
 * Iterate through the Map and show each student's name, the marks separated by '-' and the average mark (with 2 decimals).
 * Example: Peter (7.60 - 2.50 - 6.25 - 9.00). Average: 6.34
 */
console.log("                       EXERCISE 1 - PART 9");

/**
 * Part 10
 * Create a function that receives an array, deletes its duplicated values and prints them.
 * Create a Set object from the array to delete the duplicated values.
 */
console.log("EXERCISE 1 - PART 10");


