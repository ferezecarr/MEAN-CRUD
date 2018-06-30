//Requiero mongoose y la guardo en una constante
const mongoose = require('mongoose');

//Creo una constante que guardo la db
const URI = 'mongodb://localhost/mean-crud';

//Me conecto a la base de datos y verifico si me conecto mostrando un mensaje por consola
mongoose.connect(URI)
	.then(db => console.log('DB is connected'))
	.catch(err => console.error(err));

//Hay que exportar mongoose
module.exports = mongoose;