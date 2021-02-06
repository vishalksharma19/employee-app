import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import{CreateEmployeeModel} from './create-employee.model';
import {EmployeeList} from "../employee-list/employee-list.model";

@Injectable({providedIn:'root'})
export class CreateEmployeeService {
    constructor(private http: HttpClient) {
    }

    registerNewEmployee(createEmployeeModel:CreateEmployeeModel){
        const createEmployeeUrl = 'http://localhost:9191/employee-service/v1/employee';
        return this.http.post<EmployeeList>(createEmployeeUrl,createEmployeeModel);
    }

}