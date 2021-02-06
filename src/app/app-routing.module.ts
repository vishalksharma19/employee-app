import { NgModule } from '@angular/core';
import { Routes, ActivatedRoute,RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';



const routes: Routes = [{
  path: 'create',
  component: CreateEmployeeComponent},
  {
    path: '',
    component: EmployeeListComponent},
    {
      path: 'employee',
      component: EmployeeListComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
