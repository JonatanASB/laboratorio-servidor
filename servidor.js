const http = require("http");
const chalk = require('chalk');
const host = "localhost";
const port = 8000;


const server = http.createServer((req, res) => {
    if(req.method == 'GET' && req.url === '/user') {
        console.log(console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`)))
    }
})

const respuesta = { 
name: 'Jonatan',
message: 'Hola, estoy inicializando un servidor en Node.js'
};
let respuestaJson = JSON.stringify(respuesta);


server.listen(port, () => {
    console.log(respuestaJson);
})
