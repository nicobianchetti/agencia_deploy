const Testimonial = require('../models/Testimoniales');

// exports.mostrarTestimoniales = (req,res)=>{
//     Testimonial.findAll()
//         .then(testimoniales => res.render('testimoniales',{
//             pagina: 'Testimoniales',
//             testimoniales
//         }))
// }

// exports.crearTestimonial = (req, res) => {
//     //Validar que todos los campos esten llenos
//     let{nombre,correo,mensaje} = req.body; //uso destructuring

//     let errores = []
//     if(!nombre){
//         errores.push({'mensaje':'Agregar tu nombre'})
//     }
//     if(!correo){
//         errores.push({'mensaje':'Agregar tu Correo'})
//     }
//     if(!mensaje){
//         errores.push({'mensaje':'Agregar tu Mensaje'})
//     }

//     //revisar por errores
//     if(errores.length > 0){
//         //Muestra la vista con errores
//         res.render('testimoniales',{
//             errores,
//             nombre,
//             correo,
//             mensaje
//         });
//     }else{
//         //Almacenar en la base de datos
//         Testimonial.create({
//             nombre,
//             correo,
//             mensaje
//         })
//         .then(testimonial =>  res.redirect('/testimoniales'))
//         .catch(error => console.log(error))
//     }
// }

//habilitando async await

exports.mostrarTestimoniales = async (req,res)=>{
    const testomoniales = await Testimonial.findAll()
    res.render('testimoniales',{
        pagina: 'Testimoniales',
        testimoniales
    })
}

exports.crearTestimonial =  async (req, res) => {
    //Validar que todos los campos esten llenos
    let{nombre,correo,mensaje} = req.body; //uso destructuring

    let errores = []
    if(!nombre){
        errores.push({'mensaje':'Agregar tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje':'Agregar tu Correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'Agregar tu Mensaje'})
    }

    //revisar por errores
    if(errores.length > 0){
        //Muestra la vista con errores
        const trstimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje
        });
    }else{
        //Almacenar en la base de datos
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial =>  res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
}