const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

//controladores
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function(){
    router.get('/',homeController.consultasHomePage);
    router.get('/nosotros',nosotrosController.infoNosotros);
    router.get('/viajes',viajesController.mostrarViajes);
    router.get('/viajes/:id',viajesController.mostrarViaje);
    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);
    //cuando se llena el form con comentario, enviamos un post
    router.post('/testimoniales', testimonialesController.crearTestimonial);
    return router;
}