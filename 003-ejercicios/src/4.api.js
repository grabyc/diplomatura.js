import fetch from 'node-fetch';

/* ## 4. Consumir una API con Promise Chaining

Consumir la API https://jsonplaceholder.typicode.com/users y mostrar por consola los datos requeridos

- Abrir el archivo archivo 4.api.js

- Utilizar la función fetch para obtener los datos desde la URL.

- Mostrar por consola el resultado de fetch

- Convertir los resultados a un objeto utilizando resultado.json() **utilizando promise chaining**

- Mostrar por consola el nombre del usuario y la ciudad donde vive */

// fetch('..... aquí va la url')
// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })

export const fetchingToConsole = () => {
	fetch('https://jsonplaceholder.typicode.com/users').then((result) => console.log(result));
};

export const fetchingToJson = (id) => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((result) => result.json())
		.then((users) => {
			let userFound = users.find((userToFind) => userToFind.id === id);
			if (userFound) {
				console.log('Name: ', userFound.name, ' City: ', userFound.address.city);
			}
		})
		.catch((error) => console.error(error));
};
