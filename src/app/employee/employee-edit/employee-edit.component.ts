import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  @Input()
  employee:Employee;
  
  constructor(private route:ActivatedRoute,private service:EmployeeService) { }

  ngOnInit() {
     }
  updateEmployee(empId:any,desig:any){
    this.service.updateEmployee(empId,desig);
  }

}