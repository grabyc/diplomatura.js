// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';
import { helpers } from "./helpers";

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

const getUniversityById = (idUniversity) => database.universidades.find((element) => element.id === idUniversity);

// 3) Implementar una función que obtenga un profesor por Id

const getProffesorById = (idProffesor) =>database.profesores.find((element) => element.id === idProffesor);


// 4) Implementar una función que obtenga una materia por Id
// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla

const getSubjectById = (idSubject) => database.materias.find((element) => element.id === idSubject);

//El generico
const getElementFromTableById = (table, idElement) => {

	return database[table].find((element) => element.id === idElement);
};

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
/* 
const helpers = {
	getElementFromTableById(table, idElement) {
		return getElementFromTableById(table, idElement);
	},
	getUniversityById(idElement) {
		return getUniversityById(idElement);
	},
	getSubjectById(idElement) {
		return getSubjectById(idElement);
	},
	getProffesorById(idElement) {
		return getProffesorById(idElement);
	}
}; */

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

const insertProvince = (provinceName) => {
    
    database.provincias.push({
        id: helpers.lastIdElementFromTable()+1,
        nombre: provinceName
    })
}

const insertTableName = (table, name) => {
    
    database[table].push({
        id: helpers.lastIdElementFromTable(table)+1,
        nombre: name
    })
}

// 10) Implementar una función que reciba el id de una materia y devuelva la materia cno los ids de universidad y profesores resueltos a sus nombres

const getSubjectDataById = (idSubject) =>{

}

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

const getStudentsDetails = () => {
    console.log(
        "NOTAS DE ALUMNOS \n",
        "---------------- \n",

        
    )
}

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas

const insertCalification = (studentName, subjectName, subjectResult) => {
    if(!database.materias.includes(subjectName))  
          insertTableName('materias',subjectName)  
    if(!database.student.includes(studentName)) 
         insertTableName('alumnos',studentName)
     
    database.calificaciones.push({
        alumno: database.alumnos.find((element) => {element.nombre === studentName}).id,
        materia: database.materias.find((element) => {element.nombre === subjectName}).id,
        nota: subjectResult
    })

}


const inserStudent = (studentName) =>{
    database.alumnos.push({
        id: helpers.lastIdElementFromTable()+1,
        nombre: studentName
    })
}

const insertSubject = (subjectName) =>{
    
}



console.log(
  "Universidad by id: ", getUniversityById(1),
    "Profesor by id: ", getProffesorById(1),
    "Materia by id: ", getSubjectById(1),
    "Generico ", getElementFromTableById('materias',1),
    "Helpers",helpers.getProffesorById(1),


)


export {getElementFromTableById,getProffesorById,getSubjectById,getUniversityById}
