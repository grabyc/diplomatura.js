import {getElementFromTableById,getProffesorById,getSubjectById,getUniversityById} from "./index";
import { database } from "./basededatos";


  export const helpers = {


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
      },
      
      lastIdElementFromTable(table) {
          return lastIdElementFromTable(table);
      }, 
  };


const lastIdElementFromTable = (table) =>{
    let array = database[table];
    return [array.length].id;
} 