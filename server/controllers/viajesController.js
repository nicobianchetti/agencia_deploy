const Viaje = require('../models/Viajes');

// exports.mostrarViajes = (req,res)=>{
//     Viaje.findAll()
//         .then(viajes =>  res.render('viajes',{
//             pagina: 'Próximos Viajes' ,//variable que le paso a la vista
//             viajes // es lo mismo que decir , le paso la variable viajes: viajes , como tienen el mimos nombre es lo mismo
//         }))
//         .catch(error => console.log(error))
// }

// exports.mostrarViaje = (req,res)=>{
//     Viaje.findByPk(req.params.id)
//         .then(viaje => res.render('viaje',{
//             viaje
//         }))
//         .catch(error => console.log(console.error()
//         ))
// }

//Habilitando Ascyn Await.Siempre usarlo en interacciones con la BD 

exports.mostrarViajes = async (req,res)=>{
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos Viajes' ,//variable que le paso a la vista
        viajes // es lo mismo que decir , le paso la variable viajes: viajes , como tienen el mimos nombre es lo mismo
    });
}

exports.mostrarViaje = async (req,res)=>{
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje',{
        viaje
    })
}