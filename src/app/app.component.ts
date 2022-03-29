import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public products: Product[];
  public editProduct: Product;
  public deleteProduct: Product;

  constructor(private productService: ProductService, public authenticationService: AuthenticationService){}

  ngOnInit() {
    
  }

  logOut(){
    this.authenticationService.logOut();
  }
  
}
