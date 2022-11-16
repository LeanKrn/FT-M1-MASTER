'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 1){
    return [];
  }
  else{
    let left = []; 
    let right = [];
    let pivot = array[0]
    for (let i = 1; i < array.length; i++) {
      if(array[i] > pivot){
        right.push(array[i])
      }
      else{left.push(array[i])}
    }
    return [].concat(quickSort(left), pivot,quickSort(right))
  }


}
console.log(quickSort([5, 1, 4, 2, 8,6,9,12]))





function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1){ return array;}
  var longitud = Math.floor(array.length / 2) //obtiene e lelemento central de la matriz redondeado hacia abajo
  var derecha = array.slice(0, longitud) // elementos en el lado izquierdo
  var izquierda = array.slice(longitud)  // elementos en el lado derecho

  return merge(mergeSort(izquierda), mergeSort(derecha));
}

function merge  (left, right){
    //crea un array vacio para pushear los numeros ordenados
    const result = [];
    //si left y right no estan vacios
      while(left.length && right.length){
         //si right es mayor o igual a left
        if(left[0] <= right[0]){
         //pushea el valor left y lo borra de left
          result.push(left.shift());
        }else{
         //pushea el valor right y lo borra de right
          result.push(right.shift());
        }
      }
      //si left tiene algo dentro pushea el resultado y borra de left
      while(left.length) result.push(left.shift());
      //si right tiene algo dentro pushea el resultado y borra de right
      while(right.length) result.push(right.shift());
      //retorna el resultado
      return result;
}

console.log(mergeSort([5, 1, 4, 2, 8]))


// --------------------------------
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
