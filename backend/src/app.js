require('dotenv').config(); //variables de entorno

const express = require('express');

const cors = require('cors'); //para conectar back y front

const app = express();

app.use(express.json()); //habilita a recibir json

app.use(cors()); //habilita cors

//RUTAS
//Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'APP CORRIENDO EXITOSAMENTE'})
});

const PORT = process.env.PORT || 3000; //inicio de servidor, sino hay puerto habilitado va al 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});