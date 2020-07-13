import { Collection } from "./1.collection";
import { run } from "./3.delay";
import { fetchingToConsole, fetchingToJson } from "./4.api";
import { Vector } from "./2.vector";


/* let col = new Collection([1,2,3]);
col.add(1);
console.log(col.has(1));
console.log(col);

run(); */

//fetchingToConsole();
//fetchingToJson(1500)
console.log(new Vector(1, 2).sumar(new Vector(2, 3)));