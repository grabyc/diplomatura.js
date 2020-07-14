import express from 'express';
const app = express();
import postsRoutes from './controllers/posts';
import albumRout9es from './controllers/albums';
import moment from 'moment';
import os from 'os';



//declaro para el formato local-Argentina

moment.locale('es-AR');

let serverStartUpTime;

const PORT = 8080;

/* app.use('/posts', postsRoutes);
app.use('/albums', albumRoutes); */

// Implementar el endpoint de stats aca. GET "/"
app.get('/', function(req, res) {
    const fecha = new Date();
    const result = {
        serverCurrentTime: fecha, // En español
        serverStartUpTime: serverStartUpTime.format('MMMM Do YYYY, h:mm:ss a'), // En español
        serverUpTime: 'hace 10 minutos', // usando moment relative time

        status: {
            freemem: os.freemem(),
            totalmem: os.totalmem(),
            uptime: os.uptime(),
            hostname: os.hostname(),
            platform: os.platform(),
        },
    };
    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Express started on port ${PORT}`);
    serverStartUpTime = moment();
});