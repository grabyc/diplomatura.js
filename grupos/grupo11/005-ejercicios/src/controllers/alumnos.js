import express from 'express';

const router = express.Router();


router.get('/', function(req, res) {
    console.log("Entro en get todos los alumnos")
    req.db.collection("alumnos").find().toArray((err, getAlumnos) => {
        res.json(getAlumnos);
    });

});

router.get('/:id', function(req, res) {
    console.log("Entro by id con ", req.params.id);
    let query = { id: parseInt(req.params.id) };
    req.db.collection("alumnos").find(query).toArray((err, getAlumnos) => {
        res.json(getAlumnos);
    });
});

router.post('/', function(req, res) {
    // TIP: En req.body viene los datos


    res.json({ mensaje: "" });
});

// Completar el resto de los métodos
// router....

export default router;