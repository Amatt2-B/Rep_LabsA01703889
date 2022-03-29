const express = require('express');

const router = express.Router();


router.get('/', (request, response, next) => {

    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01703889_lab11</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head> <body> <div class="text-center"><h1 class="display-4 fst-italic">Cristian Leilael Rico Espinosa</h1></div>`) <div class="row d-flex justify-content-center"><div class="col-md-6"><article class="blog-post"><h2 class="blog-post-title fst-italic">Package.json</h2> <p>En base a <a href="https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/">Node.js</a>, se tratan de archivos ubicados usualmente en la raíz de un proyecto los cuales le dan iformación al NPM para que pueda identificar al mismo así como a todas sus dependencias. De igual manera, puede contener "metadata" como una descripción del proyecto, la versión de la distribución o inclusive el tipo de licencia que el proyecto de Node.js posee.</p><hr></div></div> </body></html>';
    response.send(respuesta);
});


module.exports = router;