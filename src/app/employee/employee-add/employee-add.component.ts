import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  angForm:FormGroup
  constructor(private fb:FormBuilder,private service:EmployeeService) { 
    this.createForm();
  }

  ngOnInit() {
  }
createForm(){
  this.angForm=this.fb.group({
    empId:['',Validators.required],
    empName:['',Validators.required],
    designation:['',Validators.required]
  });
}


addEmployee(empid,empname,designation)
{
  this.service.addEmployee(empid,empname,designation);
}
}
