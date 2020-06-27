/* ## 1. Collection

Escribir una clase Collection que representa una colección de elementos. Esta clase debe:

- Poder construirse o vacía (sin elementos) o con una lista inicial de elemenetos
- Debe tener un método `add` para poder agregar un elemento
- Debe tener un método `delete` para poder eliminar un elemento
- Debe tener un método `has` para poder determinar un elemento existe en la colección */

export class Collection {

    constructor (initialColection){
       if(initialColection) this.array = initialColection;
       else this.array = [];
    }
    add (element) {
        this.array.push(element);
    }
    delete (element) {
        if(has){ 
            let index = this.array.indexOf(element);
            this.array.splice(index,1);
        }
    }
    has (element) {
        return this.array.indexOf(element) !== -1;
    }
}

