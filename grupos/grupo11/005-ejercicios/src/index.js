import express from 'express';
import bodyParser from 'body-parser';
import alumnosRoutes from './controllers/alumnos';





const PORT = 8080;
const app = express();
app.use(bodyParser.json());

let expressMongoDb = require('express-mongo-db');
app.use(expressMongoDb('mongodb://localhost:27017/diplomatura'));

app.use('/alumnos', alumnosRoutes);

app.get('/', function(req, res) {
    res.json({ mensaje: 'Bienvenido al servidor de la Universidad' });
});

app.listen(PORT);
console.log(`Express started on port ${PORT}`);