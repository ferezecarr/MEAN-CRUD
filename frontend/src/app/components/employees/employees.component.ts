import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee'; 
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';

//Toma los datos de materialize y no de typescript
declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  	this.getEmployee();
  }

  addEmployee(form : NgForm){
  	if(form.value._id){
  		this.employeeService.putEmployees(form.value)
  			.subscribe(res => {
  				this.resetForm(form);
  				M.toast({html:'Actualizado Satisfactoriamente'});
  				this.getEmployee();
  			});
  	} else{
  		this.employeeService.postEmployees(form.value)
  		.subscribe(res => {
  			this.resetForm(form);
  			M.toast({html:'Guardado Satisfactoriamente'});
  			this.getEmployee();
  		});
  	}
  	
  }

  getEmployee(){
  	this.employeeService.getEmployees()
  		.subscribe(res => {
  			this.employeeService.employees = res as Employee[];
  			console.log(res);
  		});
  }

  editEmployee(employee : Employee){
  	this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id : string){
  	if(confirm('¿Esta seguro de querer eliminarlo?')){//El metodo confirm devuelve true si confirmo sino da false
  		this.employeeService.deleteEmployees(_id)
  			.subscribe( res => {
  				this.getEmployee();
  				M.toast({html:'Eliminado Satisfactoriamente'});
  			});
  	  }
  }

  resetForm(form? : NgForm){
  	if (form) {//Si existe el formulario , lo resetea
  		form.reset();
  		this.employeeService.selectedEmployee = new Employee();
  	}
  }

}
