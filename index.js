const express = require('express');
const { Router } = express;
const multer = require('multer');

const router = Router();
const app = express();

const PORT = 8080;
const server = app.listen(PORT, () => {
	console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en servidor ${error}`));
