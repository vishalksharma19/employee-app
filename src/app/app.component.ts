import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-app';
  constructor( private activatedRoute: ActivatedRoute, private router: Router ) { }
  ngOnInit() {}
  gotoRegister(){
    this.router.navigate(['/create']);  // define your component where you want to go
}
}
