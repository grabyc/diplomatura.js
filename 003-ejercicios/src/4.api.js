import fetch from 'node-fetch';

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
export const api = id => {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      return response.json();
    }).then(json => {
      let res = json.find(element => element.id === id);
      console.log(res.name);
      console.log(res.address.city);
    })
    .catch(err => {
        console.log("ocurrio algo");
    });
  };

  export const getRemoteData= async (id) => {
    let datos= await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    datos= datos.find(element => element.id === id);
    console.log(datos.name, datos.address.city);
  }

  const delay = async (segundos) => {

  }
  let run = () => {
    console.log(1);
    delay('Terminó 1', 1000);
    console.log(2);
    delay('Terminó 2', 1000);
    console.log(3);
    delay('Terminó 3', 1000);
  }