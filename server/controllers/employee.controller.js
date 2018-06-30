const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async  (req , res) => {
	//Guardo en una constante la busqueda de todos los empleados y con await le digo que tomara tiempo.
	const employees = await Employee.find();
	res.json(employees);
};

employeeCtrl.createEmployees = async (req , res) => {
	const employee = new Employee({
		name: req.body.name,
		position: req.body.position,
		office: req.body.office,
		salary: req.body.salary
	});
	await employee.save();
	res.json({
		'status' : 'Employee saved'
	});
};

employeeCtrl.getEmployeesId = async (req , res) => {
	const employee = await Employee.findById(req.params.id);
	res.json(employee);
};

employeeCtrl.editEmployees = async (req , res) => {
	//Creo una constante y lo solo requiero el id como parametro
	const { id } = req.params;
	const employee = {
		name : req.body.name,
		position : req.body.position,
		office : req.body.office,
		salary : req.body.salary
	};
	//con set actualiza al empleado
	await Employee.findByIdAndUpdate(id , {$set : employee} , {new : true} );
	res.json({
		'status' : 'Employee updated'
	});
};

employeeCtrl.deleteEmployees = async (req , res) => {
	await Employee.findByIdAndDelete(req.params.id);
	res.json({
		'status' : 'Employee deleted'
	});

};

module.exports = employeeCtrl;