const mongoose = require('mongoose');
//Requiero solo los esquemas de mongoose
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
	name : {
		type : String,
		required : true
	},
	position : {
		type : String,
		required : true
	},
	office : {
		type : String,
		required : true
	},
	salary : {
		type : Number,
		required : true
	}
});

//Le tranfiero el modelo de datos a mongoDB
module.exports = mongoose.model('Employee' , EmployeeSchema);