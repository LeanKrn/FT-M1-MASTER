'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
    let i = 2;
    //este while recorre mientras que num sea diferente a 1
    while(num !== 1) {
      //el if verifica si el resto de num por i es 0
      if (num % i === 0) {
        //si es 0 pushea el resultado
        array.push(i);
        //divide num por i para seguir la division
        num = num/i;
      } else {
        //si no cumple con el if le suma uno al let
        i++;
      }
    }
    //retorna el array con los valores
    return array;
  
}
console.log(factorear(33))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // bublesort va swapeando el mas grande va a el final del arreglo
  let swap = true; //para que ingrese en el while es true
  while(swap) { // 
  swap = false; // para evitar el loop infinito del test, cambiamos a false, condicion de corte
      for (let i=0; i <array.length -1; i++) {
        //si array i es mayor a array i mas uno
        if (array[i]>array[i+1]) {
          //aux toma el valor de i
          let aux = array[i];
          //array i toma la posicion de su siguiente array
          array[i] = array[i+1];
          //toma el valor de su anterior posicion que se guardo en aux
          array[i+1] = aux;
          swap = true; // volvemos a colocar nuestra condicion de corte en true para que siga trabajando el while hasta q no hayan mas cambios para hacer en el loop.
   }              // cuando no tenga mas cambios para hacer el swap va a quedar en false y el while va a finalizar.
 }
}
return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) { // se inicializa i en 1 para que j sea 0 y empiece la comparacion
    let j = i-1; //un puntero que va detras de i
    let aux = array[i]; // me guardo array[i] para preservarlo y no perderlo
    while(j>=0 && aux < array[j]){ // comparo aux con array[j] 
      array[j+1] = array[j];
      j--; // para que vaya al anterior, o sea 0
    }
    array[j+1] = aux; // ubico j en la posicion 0 
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
// identifica el numero mas chico para llevarlo hacia adelante de todo sin pararnos donde ya habiamos estado
for (let i = 0; i < array.length-1; i++) {
  //declara el minimo en i
  let min= i
  for (let j=i+1 ; j < array.length; j++) {
    //si min es mayor a j reemplaza min por j
    if(array[min]>array[j]){
      min = j;
    }
  }
  //si i es diferente al min guarda i en aux le da el valor de min a i y el valor de aux a min
  if (i!==min) {
    let aux = array[i];
    array[i] = array [min];
    array [min] = aux;
  }
}
return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
