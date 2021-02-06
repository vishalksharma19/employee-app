import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeList} from "./employee-list.model";

@Injectable({providedIn:'root'})
export class EmployeeListService {

    constructor(private http: HttpClient) {
    }

    getAllEmployee(): Observable<Array<EmployeeList>> {
        const getEmployeeListUrl = 'http://localhost:9191/employee-service/v1/employee';
        return this.http.get<Array<EmployeeList>>(getEmployeeListUrl);
      }
}