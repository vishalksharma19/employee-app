import { Component, OnInit } from '@angular/core';
import {EmployeeListService} from "./employee-list.service";
import {EmployeeList} from "./employee-list.model";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Array<EmployeeList> = [];
  itemsPerPage:number;
  currentPage:number;
  constructor(private employeeListService :  EmployeeListService) { }

  ngOnInit(): void {
    this.initializeToDOModel();
  }

  initializeToDOModel(){
    this.employeeListService.getAllEmployee().subscribe(this.handleResult, this.handleError);
  }

  handleResult = (employeeList: Array<EmployeeList>) => {
    this.employeeList = employeeList;
    console.log(employeeList);
  }

  handleError = (result: any) => {
    console.log('handleError', result);
  }

}
