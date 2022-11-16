"use strict";

const { TestWatcher } = require("jest");

//const { isWhiteSpace } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  //le doy propiedades a cada nodo del arbol como su valor,su izquierda y su derecha que posteriormente les voy a asignar otros nodos
  this.value=value;
  this.right=null;
  this.left=null;
}

let bst= new BinarySearchTree(20)

BinarySearchTree.prototype.insert = function(value){
  //si el valor que recibimos es mayor al valor que tenemos previamente
  if(value > this.value){
        //si la derecha tiene un objeto se hace recursividad sobre ella hasta encontrar un null para asignar el valor
       if(this.right !== null){
             this.right.insert(value)
       }  //cuando encuentra el null asigna el valor
       if(this.right === null){
           this.right = new BinarySearchTree(value)
           return value
    }
  }
  //si el valor que recibimos es menor al valor que tenemos
 if(value < this.value){
          //si la izquierda tiene un objeto se ahce recursividad sobre ella hasta encontrar un null para asignar el valor
         if(this.left !== null){
            this.left.insert(value)
         }
         //cuando se cuentra el null se asigna el valor
         if(this.left === null){
             this.left = new BinarySearchTree(value)
             return value
    }
      

  }
}

BinarySearchTree.prototype.contains = function(value){ // value
  //si el valor que tengo es igual a el valor que me dieron devolve true
	if(this.value === value) return true;
  //si el valor que me dieron es menor al que tengo y no tengo null a la izquierda te movemos al contenedor izquierdo
		if(value < this.value && this.left !== null){
			return this.left.contains(value);
      //si valor es mayor al valor que tengo y no tengo null a la derecha te movemos al contenedor derecho
	} else if(value > this.value && this.right !== null){
			return this.right.contains(value)
      //si no se encuentra nada retorna false
	} else return false;
	}

BinarySearchTree.prototype.size = function() {
    //si estoy parado en el ultimo nodo retorna 1
    if(!this.right && !this.left)return 1; 
    //si estoy parando en un nodo que no tiene derecha retorna 1 y hace recursividad para el nodo de la izquierda
    if(!this.right)return 1 + this.left.size();
    //si estoy parado en un nodo que no tiene izquierda retorna 1 y hace recursividad para el nodo de la derecha
    if(!this.left)return 1 + this.right.size();
    //si tiene nodo en la izquierda y derecha retorna 1 y hace recursividad en los nodos de la izquierda y derecha
    if(this.left && this.right)return 1 + this.left.size()+this.right.size();
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  switch (orden) {
    case "pre-order":
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb,orden)
      this.right && this.right.depthFirstForEach(cb,orden)
      break;

      case "post-order":
        this.left && this.left.depthFirstForEach(cb,orden)
        this.right && this.right.depthFirstForEach(cb,orden)
        cb(this.value)
      break;

    default:
      this.left && this.left.depthFirstForEach(cb,orden)
      cb(this.value)
      this.right && this.right.depthFirstForEach(cb,orden)
      break;
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb,pendientes){
 if(!pendientes){
  var pendientes= []
 }

 cb(this.value)

 this.left && pendientes.push(this.left)
 this.right && pendientes.push(this.right)

 pendientes.length > 0 && pendientes.shift().breadthFirstForEach(cb,pendientes)
}




bst.insert(23)
bst.insert(15)
bst.insert(35)
bst.insert(45)
bst.insert(5)
bst.insert(3)
console.log(bst.size())


console.log(bst)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
