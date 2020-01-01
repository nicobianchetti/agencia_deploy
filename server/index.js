//archivo de configuracion mas importante

//Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({path: 'variables.env' })

// db.authenticate()
//     .then(()=>console.log('DB Conectada'))
//     .catch(error=>console.log(error));


//Configurar express
const app = express();


//habilitar pug
app.set('view engine','pug');

//Añadir las vistas
app.set('views',path.join(__dirname,'./views'));

//cargar una carpeta estatica llamada publica
app.use(express.static('public'))

//Muestra el año actual
app.use((req,res,next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

//validar si estamos en desarrollo o en produc
const config = configs[app.get('env')]; //env es una variable que existe para detectar el ambiente donde estamos

//Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}));

//cargar las rutas
app.use('/',routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('Aplicación corriendo en http://'+host+':'+port)
});

