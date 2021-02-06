import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{CreateEmployeeModel} from './create-employee.model';
import{CreateEmployeeService} from './create-employee.service';
import {EmployeeList} from "../employee-list/employee-list.model";
import { Router, ActivationEnd, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createEmployeeModel:CreateEmployeeModel= new CreateEmployeeModel();
  employee:EmployeeList;
  constructor(private createEmployeeService:CreateEmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createEmployee(createEmployeeModel:CreateEmployeeModel){
    this.createEmployeeService.registerNewEmployee(createEmployeeModel).subscribe(this.handleResult, this.handleError);
  }

  handleResult = (employee: EmployeeList) => {
    this.employee = employee;
    console.log(employee);
    this.router.navigate(['']);
  }

  handleError = (result: any) => {
    console.log('handleError', result);
  }

}
