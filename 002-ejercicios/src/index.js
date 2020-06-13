// 1) Importar el objeto 'database' del archivo "./basededatos"
import { helpers } from './helpers';
import { database } from './baseDeDatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados
//const getUniversidadById = id => database.universidades.find(u => u.id === id);
//console.log(getUniversidadById(2));

// 3) Implementar una función que obtenga un profesor por Id
//const getProfesorById = id => database.profesores.find(p => p.id === id);
//console.log(getProfesorById(2));

// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla
//const getTablaById = (table, id) => database[table].find(x => x.id === id);
//const getMateriaById = id => getTablaById('materias', id);
//console.log(getMateriaById(2));

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
/*const getTablaById = (table, id) => database[table].find(x => x.id === id);

let helpers = {
    getUniversidadById: id => getTablaById('universidades', id),
    getProfesorById: id => getTablaById('profesores', id),
    getMateriaById: id => getTablaById('materias', id)
};
*/
console.log(helpers.getUniversidadById(2));
console.log(helpers.getProfesorById(2));
console.log(helpers.getMateriaById(2));


// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
const getUltimoId = (table) => database[table].sort((a,b) => b.id-a.id)[0];
console.log(getUltimoId('materias'));
// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
