import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeComponent } from './create-employee.component';
import{CreateEmployeeService} from './create-employee.service';
import {Observable, of, Subscriber, throwError} from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let createEmployeeService:CreateEmployeeService;

  class CreateEmployeeServiceMock{
    registerNewEmployee(any):Observable<any>{
      return of(null);
  }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      imports:[RouterTestingModule],
      providers: [{
        provide: CreateEmployeeService,
        useClass: CreateEmployeeServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    createEmployeeService=TestBed.inject(CreateEmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
