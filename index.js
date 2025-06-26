const express =require('express'); 
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');



app.get('/', (req, res) => { 
     res.send('funcionando correctamente'); 

}); 


app.listen(3000);
