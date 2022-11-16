"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this._length = 0;
  this.head = null;
  //esta funcion es el inicio de nuestra lista o tamb conocida como head
}

function Node(value) {
  this.value = value;
  this.next = null;
  //esta funcion node define el valor y deja por default null para nuestro nodo
}


LinkedList.prototype.add = function(value) {
  //Crearme el nodo a agregar
     const node = new Node(value);
  // Declaro el Puntero
      let current = this.head;
  // Si está vacia
   if (!current) {
      //Asignando el valor a la cabeza de mi lista por que esta vacia,sumo uno a mi length para tener el calculo de nodos que tengo y retorno el nodo que agregue
      this.head = node;
      this._length++;
      return node;
  }
  // Si no esta vacia, recorro hasta encontrar el último
    while (current.next) {
       current = current.next;
  }
  // Al encontrar el ultimo , le asigno el nuevo nodo a su next
    current.next = node;
    //_length++ suma 1 a nuestro contador para saber cuantos nodos tengo creados y retorna el nodo creado
    this._length++;
    return node;
};
const myList = new LinkedList()
myList.add("gustavo")
myList.add("oscar")


LinkedList.prototype.remove = function(){
  //empezamos en la cabeza
  let current = this.head; 
 //Si la lista no tiene al menos un nodo
    if(!current){
        //consologueo la lista esta vacia y retorno null
       console.log('La lista esta vacia!')
         return null
} 
if(!current.next){
  //si estoy al princio de la lista guardo el valor del primer nodo,cambio el head por null,descuento uno de mi length y retorno el valor que guarde
  let aux=this.head.value
  this.head=null
  this.size--
  return aux
}
//Recorriendo la lista mientras tenga current
  while(current.next.next){
    current = current.next
 }
 //guardo el valor que habia en el nodo que quiero eleminar y descuento uno de mi length para llevar siempre el conteo de nodos que tengo
  let info=current.next.value
  this._length--
    // este console log es para verificar que tengo bien el valor,declaro null en el next para desvincular el nodo que queria eliminar y retorno el valor que guarde del  nodo eliminado
    console.log(info)
    current.next = null;
    return info
};

console.log(myList.remove())
console.log(myList)


LinkedList.prototype.search = function(value){
  //empezamos en la head
    let current = this.head; 
    //recorremos la lista
    while(current){//se recorre la lista
      if(typeof value === "function"){//si es una funcion la ejecuta para saber si es el mismo valor que guardo es el mismo que da la funcion
          if(!!value(current.value))return current.value
      }else{
          if(current.value === value)return current.value
          //verifico si tengo el valor por algun lado
      }
      current = current.next;
      //si no encontro un valor igual al que me preguntaron se vuelve a ejecutar
   }

    return null
    //retorno null si no encuentra un valor igual al que me dieron
};

console.log(myList.search("gustavo"))




/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  //declaro el numero de casilleros que tiene mi hashtable y el casillero vacio
  this.numBuckets=35
  this.buckets=[]
}

HashTable.prototype.hash= function(key){
  
  let acomulador=0;
  for(const character of key){
    //num saca el numero de los caracteres en unicode
    const num= character.charCodeAt()
    acomulador+= num
    //acomulador se suma a num 
  }
  return acomulador % this.numBuckets
  //retorna el resto de acomulador y los casilleros que tengo para tener un numero de key
}

HashTable.prototype.set= function(key,value){
  //si la key que nos dieron no es un string tira error
  if(typeof key !== "string")throw TypeError("Keys must be strings")
  //declaro el index con la key ya hasheada entre comillas encriptada
  const index = this.hash(key)
  //so no existe el casillero en esa posicion que nos dio la key crea uno
  if(!this.buckets[index]){
    this.buckets[index]={}
  }
  //asigna la key y el valor a un casillero
  this.buckets[index][key]=value
}

HashTable.prototype.get= function(key){
  //crea un index con la key hasheada
  const index = this.hash(key)
  const buck=this.buckets[index]
  //buck es el casillero que busca y si encuentra retorna el casillero de lo contrario retorna null por que es el valor dentro del casillero vacio
  return buck[key]
}

HashTable.prototype.hasKey= function(key){
  //con el prototype get que busca el valor verifica si devuelve algo al buscar esa key y si devuelve algo nos retorna true de lo contrario retorna false
  if(this.get(key)){
    return true
  }else {return false}
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
