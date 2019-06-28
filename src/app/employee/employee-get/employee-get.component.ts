import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-get',
  templateUrl: './employee-get.component.html',
  styleUrls: ['./employee-get.component.css']
})
export class EmployeeGetComponent implements OnInit {
  employees:Employee[]=[];
  selectedEmp:Employee;
  constructor(private route:ActivatedRoute,
    private service:EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees()
    .subscribe(employeeList=>this.employees=employeeList);
  }

  onSelection(emp:Employee){
    this.selectedEmp=emp;
  }
}


