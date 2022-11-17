//const mergeSort = (array, level) => {
//    logWithLevel(level, "Start sort array " + array);
//    if(array.length < 2) {
//      //function stop here
//      logWithLevel(level, "Finish sort array " + array);
//      return array;
//    }
//  
//    const middle = Math.floor(array.length / 2);
//    logWithLevel(level, "middle element is " + array[middle])
//    const leftSide = array.slice(0, middle);
//    const rightSide = array.slice(middle, array.length);
//    var result = merge(mergeSort(leftSide, level + 1), mergeSort(rightSide, level + 1));
//    logWithLevel(level, "Finish sort array " + result);
//    return result;
//  };
//  
//  const merge = (left, right) => {
//    const result = [];
//  
//    while(left.length && right.length){
//      if(left[0] <= right[0]){
//        result.push(left.shift());
//      }else{
//        result.push(right.shift());
//      }
//    }
//  
//    while(left.length) result.push(left.shift());
//  
//    while(right.length) result.push(right.shift());
//  
//    return result;
//  }
//  
//  const logWithLevel = (level, data) => {
//      var s = ""
//      for (i = 0; i < level; i++) {
//          s += "    ";
//      }
//      console.log(s + data);
//  }
//
//
//console.log(mergeSort([82,4,65,342,1,32,4]))
//
//
//
//const mergeSort = (array) => {
//    //condicion de corte si length es un solo numero
//     if(array.length < 2) {
//       return array;
//     }
//     //divide el total de la lista para conseguir la mitad
//     const middle = Math.floor(array.length / 2);
//     //separa el array en dos partes
//     const leftSide = array.slice(0, middle);
//     const rightSide = array.slice(middle, array.length);
//     //hace recursion llamando a merge para que los acomode
//     var result = merge(mergeSort(leftSide), mergeSort(rightSide));
//     return result;
//   };
//   
//   const merge = (left, right) => {
//    //crea un array vacio para pushear los numeros ordenados
//     const result = [];
//   //si left y right no estan vacios
//     while(left.length && right.length){
//        //si right es mayor o igual a left
//       if(left[0] <= right[0]){
//        //pushea el valor left y lo borra de left
//         result.push(left.shift());
//       }else{
//        //
//         result.push(right.shift());
//       }
//     }
//     while(left.length) result.push(left.shift());
//     while(right.length) result.push(right.shift());
//     return result;
//   }
//
// console.log(mergeSort([82,4,65,342,1,32,4]))



function tipologiasSeparadas(arr){
  // Tu código aquí:
  if(arr.length == 0) {
      return "Tipologias inexistentes"
    }
    var cont = 0
    const date = new Stack()

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == arr[i + 1]){
          let aux = arr[i + 1]
          arr.splice(i + 1, 1)
          arr.push(aux)
        cont++
      }
      date.push(arr[i])
    }

    if(cont == 0) {
      return "No hay tipologias repetidas"
    }
    return date
};



function Stack() {
  this.arr = [1,2,2,3,3,4,4,5]
}


let arr = [1,2,2,3,3,4,4,5]
console.log(arr)
arr.pop([2])
console.log(arr)

























