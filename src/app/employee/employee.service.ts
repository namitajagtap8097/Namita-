import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 //default uri to call express service is :http://localhost:4000/emp
   uri="http://localhost:4000/emp";
  
  
  constructor(private httpClient:HttpClient) { }
 // http://localhost:4000/emp/allEmp
  getEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.uri}`+`/allEmp`);
  }
  addEmployee(id,name,desig){
    let emp={
      empId:id,
      empName:name,
      designation:desig

    };
    return this.httpClient.post(`${this.uri}`+'/addEmp',emp).subscribe(res=>console.log("New Employee registered successfully"));
  }


   // http://localhost:4000/emp/delete
  deleteEmployee(empId:number):any
  {
    this.httpClient.delete(`${this.uri}`+'/delete/'+`${empId}`).subscribe(res=>console.log("New Employee deleted Successfully"));
  }

  // http://localhost:4000/emp/update
  updateEmployee(empId,desig):any{
    return this.httpClient.put(`${this.uri}`+'/update/'+empId+`/`+desig,{}).
    subscribe(res=>console.log("updated successfully"));
}
}

