
import { database } from './baseDeDatos';

const getTablaById = (table, id) => database[table].find(x => x.id === id);

export const helpers = {
    getUniversidadById: id => getTablaById('universidades', id),
    getProfesorById: id => getTablaById('profesores', id),
    getMateriaById: id => getTablaById('materias', id),
    getTabla: table => database[table],
    getUltimoId: table => database[table].sort((a,b) => b.id-a.id)[0]
};