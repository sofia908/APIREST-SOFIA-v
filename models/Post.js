const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    documento: {
        type: String,
        required: true
},
nombre: {
        type: String,
        required: true
    },
apellido: {
        type: String,
        required: true
     }, 
date: {
        type: Date,
        default: Date.now
    },
}); //defino el esquema de la base de datos, los campos y sus tipos
module.exports = mongoose.model('Post', PostSchema); //exporto el modelo de la base de datos
// el nombre del modelo es Post y el esquema es PostSchema 
