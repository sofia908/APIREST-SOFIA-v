const express = require('express'); 
const app = express();
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());     // nos crea unos modulos que nos permiten recibir datos en formato json 

const postRoutes =require('./routes/post'); //conecto las rutas de los servicios
app.use('/servicios', postRoutes);

mongoose.connect('mongodb+srv://sofiavaron2324:ENOujNksz4lGWH5P@cluster0.ljr0ouu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

const connection = mongoose.connection; // creo conexion a la base de datos
connection.once('open', () => {
    console.log('MongoDB conexion de base de datos  esta conectada');
});

app.listen(3000); //puerto por donde escucha el servidor


