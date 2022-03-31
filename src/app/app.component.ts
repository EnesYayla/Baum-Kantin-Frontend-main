import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { Employee } from './models/employee';
import { ProductService } from './services/product.service';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {
    
  }

}