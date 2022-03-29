
const filesystem = require('fs');

const comida = ["Sushi", "Arroz", "Pescado", "Pasta"];

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01707023_Lab10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h1 class="display-4 fst-italic">Adrian Matute Beltran</h1></div>`);
-       response.write('<div class="row d-flex justify-content-center"><div class="col-md-6"><article class="blog-post"><h2 class="blog-post-title fst-italic">Vivencia</h2> <p>La verdad es, que hasta el día de hoy soy una persona que no había atravesado muchos cambios hasta hace más o menos, dos años y medio, un evento hizo que me replanteara todas las cosas que hasta la fecha tenía y también la forma en la que pensaba.<br>Actualmente, sigo caracterizándome por ser proactivo en las cosas que son de mi interés así como en situaciones de presión,además, soy leal, respetuoso, responsable y siento una mayor confianza cuando puedo expresarme de manera escrita.</p><hr></div></div>');
        response.write('<div class="text-center"><h2>Aprende acerca de mi</h2></div>');
        response.write('<div class="text-center"><h4>Videojuegos</h4></div>');
        response.write('<div class="text-center"> <a href="/videojuegos"><button>Visitar Sitio</button></a></div><br>')
        response.write('<div class="text-center"><h4>Música</h4></div>');
        response.write('<div class="text-center"> <a href="/musica"><button>Visitar Sitio</button></a></div><br>')
        response.write('<div class="text-center"><h4>Comida y ejercicio</h4></div>');
        response.write('<div class="text-center"> <a href="/ejercicio"><button>Visitar Sitio</button></a></div><br>')  
        response.write('</body></html>');
        response.end();

    } 
    else if (request.url === '/videojuegos' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01703889_LAB10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Adrian Matute Beltran</h4></div>`);
        response.write(`<div class="text-center"><h4>Halo</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">La serie se centra en una guerra interestelar entre la humanidad y una alianza teocrática de alienígenas conocidos como Covenant. <br>Fuente: https://es.wikipedia.org/wiki/Halo_(franquicia)<hr></div></div>');
        response.write(`<div class="text-center"><h4>League of Legends</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.<br>Fuente: https://www.leagueoflegends.com/<hr></div></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();


    }
    else if (request.url === '/musica' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01703889_LAB10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Adrian Matute Beltran</h4></div>`);
        response.write(`<div class="text-center"><h4>Twenty One Pilots</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6"> es un dúo musical estadounidense de Columbus, Ohio. La banda se formó en 2009 por el vocalista Tyler Joseph junto con Nick Thomas y Chris Salih, quienes se fueron en 2011.<br>Fuente: https://es.wikipedia.org/wiki/Twenty_One_Pilots<hr></div></div>');
        response.write(`<div class="text-center"><h4>Imagine dragons</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Imagine Dragons es una banda estadounidense de Pop Rock originaria de Las Vegas, Nevada. Está compuesta por Dan Reynolds (vocalista), Daniel Wayne Sermon (guitarrista), Ben McKee (bajista) y Daniel Platzman (baterista). La banda ganó el reconocimiento mundial con el lanzamiento de su álbum de estudio debut Night Visions (2012), y con su canción Its Time.<br>Fuente: https://es.wikipedia.org/wiki/Imagine_Dragons<hr></div></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();

    }
    else if (request.url === '/ejercicio' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01703889_LAB10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>')
        response.write(`<div class="text-center"><h4>Adrian Matute Beltran</h4></div>`);
        response.write('<div class="list-item text-center">');
        for (let i in comida) {
            response.write('<li>' + comida[i] + '</li>');
        }
        response.write('</div>');
        response.write('<form action="/ejercicio" method="POST">');
        response.write('<div class="text-center"><label for="comida">Recomienda alguna receta <br></label>');
        response.write('<input type="text" name="comida" required>');
        response.write('<input type="submit" value="Enviar"></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();

    }

     else if (request.url === '/ejercicio' && request.method === 'POST') {
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () => {
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        console.log(nuevo_dato);
        comida.push(nuevo_dato);
        console.log(comida);
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01703889_LAB10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Adrian Matute Beltran</h4>`);
        response.write('<h2>Mi comida favorita y sus recomendaciones </h2><br><br>');
        response.write('<h4>La lista se ha actualizado:</h4></div>');
        response.write('<div class="list-item text-center">');
        for (let i in comida) {
            response.write('<li>' + comida[i] + '</li>');
        }
        response.write('</div>');
        response.write('<div class="text-center"><a href="/ejercicio">Regresa a la lista inicial de comida.</a></div>');
        response.write('</section></div>');
        response.write('</body>');
        return response.end();
    });
}
    
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>A01703889_LAB10 | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página ' + request.url + ' no se encontró la página </h1>');
        response.write('</body>');
        response.end();
    }

});

server.listen(3000);