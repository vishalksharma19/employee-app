import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import {EmployeeListService} from "./employee-list.service";
import {Observable, of, Subscriber, throwError} from 'rxjs';
import { AngularPaginatorModule } from 'angular-paginator';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeListService:EmployeeListService;

  class EmployeeListServiceMock{
    getAllEmployee():Observable<any>{
      return of([]);
  }
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports:[AngularPaginatorModule],
      providers: [{
        provide: EmployeeListService,
        useClass: EmployeeListServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    employeeListService=TestBed.inject(EmployeeListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
