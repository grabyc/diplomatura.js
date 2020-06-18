// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';
import {helpers} from "./helpers.js";

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

//console.log(getUniversidadById(1));


// 3) Implementar una función que obtenga un profesor por Id


// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla



// 5) Crear un objeto 'helpers' que contenga las funciones como métodos

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla
//return  database[table][database[table].length-1];


// 8) Importar helpers desde su propio módulo

//console.log(getProfesorById(2));
console.log(helpers.getProfesorById(2));

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper


// 10) Implementar una función que reciba el id de una materia y devuelva la materia con los ids de universidad y profesores resueltos a sus nombres

const getMateriaCompleta = (idMateria) => {
    let data;
    let materia=getMateriaById(idMateria);
    let profesores=[];
    materia.profesores.forEach((idProfe) => {profesores.push(getProfesorById(idProfe).nombre)});
    data={
        id:materia.id,
        nombre:materia.nombre,
        universidad: getUniversidadById(materia.universidad).nombre,
        NombreProfesores:profesores
    }

    return data;
}
//console.log(getMateriaCompleta(1));

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

//console.log(buscarByNombre("Rigoberto Manchu"));

/*const calificar = (nombreAlumno, nombreMateri,nota ) => {
    if(buscarByNombre(nombreAlumno)){
        
    }
}*/

