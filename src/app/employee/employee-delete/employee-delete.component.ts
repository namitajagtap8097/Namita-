import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute, private empService:EmployeeService) { }

  ngOnInit() {
    let empId=this.route.snapshot.paramMap.get("empId");
    this.deleteEmployee(empId);
  }
  deleteEmployee(empId)
  {
    this.empService.deleteEmployee(empId);
  }
}
