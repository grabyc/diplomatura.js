import { getObjetTableById, getProfesorById, getUniversidadById } from "./index";
import { database } from "./basededatos";


export const helpers = {


    getObjetTableById(table, idElem) {
        return getObjetTableById(table, idElem);
    },


    getUniversidadById(idElem) {
        return getUniversidadById(idElem);
    },


    getProfesorById(idElem) {
        return getProfesorById(idElem);
    },

    ultimoElmentoDeLaTabla(table) {
        return ultimoIdDeLaTabla(table);
    },
};


const ultimoIdDeLaTabla = (table) => {
    let array = database[table];
    return [array.length].id;
}