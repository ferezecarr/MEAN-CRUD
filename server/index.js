//Requiero express y lo guardo en una constante
const express = require('express');
//Requiero morgan y lo guardo en una constante
const morgan = require('morgan');
//Requiero cors y lo guardo en una constante
const cors = require('cors');
//Llamo al objeto express y lo guardo en una constante
const app = express();
//Requiero mongoose de la db y lo guardo en una constante
const { mongoose } = require('./database');

/*Configuracion del servidor*/
//Le asigno una variable y una constante que asume el puerto 3000 por defecto
app.set('port' , process.env.PORT || 3000);

/*Middlewares*/
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin : 'http://localhost:4200'}));//Le digo que se conecta el puerto 3000 de node con el de angular que es el 4200

/*Rutas*/
app.use('/api/employees' ,require('./routes/employee.routes'));


/*Iniciando con el servidor*/
//Le digo que escucha al puerto 3000 y coloco un mensaje por consola
app.listen(app.get('port') , () => {
	console.log('Server on port' , app.get('port'));
});