// ArrayList

// Esta estructura de datos se utiliza cuando es necesario que un elemento conozca al siguiente, en este caso cada elemento trendra la informacion necesara para llegar al siguiente

// Creamos una clase Node que la que creara los elementos de la lista, cada elemento en una lista es un nodo cada nodo esta compuesto por un valor y un enlace al siguiente nodo de la lista

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Luego la clase LinkedList   que en su constructor contiene dos pripiedades
// el head y el tail, la cabeza de la lista y la cola que en un principio seran null
// porque la lista esta completamente en blanco no contiene ningun nodo

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //
  //   luego agregamos un metodo para agregar elementos al cual le pasaremos un valor  y
  //   se encargara de crear un nuevo nodo con el valor que le pasamos
  //   chekeamos si todavia no existe cabeza en la lista, ponemos este nodo en la cabeza de la
  //   misma, caso contrario vamos al ultimo elemento el cual tiene la posibilidad
  //   de asignar la direccion de un nuevo valor (.next) y aqui agregaremos el nuevo nodo
  //   sea como sea al final de la comprobacion el nuevo nodo sera el tail de la lista

  //  Para que se entienda mejor, tail sera el ultimo elemento y el head el primero, cada vez que se agrega un nuevo elemento
  //  este se hace sobre el final de la lista(FILO) por ende el nuevo elemento sera el ultimo en la lista que a su vez sera el primero en ser leido
  //

  append(value) {
    const newNode = new Node(value);
    !this.head ? (this.head = newNode) : (this.tail.next = newNode);
    this.tail = newNode;
  }
  //
  //   Creamos a continuacion un nuevo metodo para recorrer la lista, este comenzara por la cabeza
  //   y mientras la posicion no caiga en un null seguira al proximo elemento,
  //   a cada elemento de la lista se le aplicara la funcion que se le pase al metodo
  //   hasta terminar la lista
  //

  traverse(callback) {
    let currentNode = this.head;
    while (currentNode !== null) {
      callback(currentNode);
      currentNode = currentNode.next;
    }
  }
}
//
// Creamos la funcion callback, en este caso solo pintara por consola el valor
//
const printNode = (node) => console.log(node.value);
//
// Creamos la lista
//
const list = new LinkedList();
//
// Agregamos elementos
//
list.append(1);
list.append(2);
list.append(3);
list.append(4);

//
// Y la recorremos pasando la funcion que se ejecutara en cada iteracion como paramentro
//

list.traverse(printNode);
