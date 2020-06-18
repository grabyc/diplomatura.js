import { database } from './basededatos';
const getUniversidadById = idUni => database.universidades.find(elem => elem.id===idUni);
const getProfesorById = idProfe => database.profesores.find(elem => elem.id === idProfe);
const getById = (id,arreglo) => {
    return database[arreglo].find(elem => elem.id===id);
};
const getMateriaById = (idMateria) => database.materias.find(elem => elem.id===idMateria);
const getUltimoId = function(table){
    console.log(table);
    let ultimoId=0;
    table.forEach(element => {
        if(element.id > ultimoId)
        ultimoId=element.id;
    });
    return ultimoId;
};
const nuevaProvincia= np => {
    let i=getUltimoId(database.provincias);
    //database.provincias.push({id:i+1,nombre:np})
    return i;
};
const buscarByNombre = nombreAlumno => database.alumnos.find(elem => elem.nombre===nombreAlumno);

export const helpers = {
    getById:(table,idElement) => getById(table, idElement),
    getUniversidadById:(idElement) => getUniversidadById(idElement),
    getSubjectById:(idElement) => getSubjectById(idElement),
    getProfesorById:(idElement) => getProfesorById(idElement),
    getUltimoId:(table) => getUltimoId(table),
    getMateriaById:(idMateria) => getMateriaById(idMateria),
    buscarByNombre:(nombreAlumno) => buscarByNombre(nombreAlumno)
}

/*helpers.prototipe.getUltimoId = function(table){
    let ultimoId=0;
    table.forEach(element => {
        if(element.id > ultimoId)
        ultimoId=element.id;
    });
    return ultimoId;
}*/