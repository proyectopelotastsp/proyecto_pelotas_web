import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  productos : Array<ProductsInterface>;

  constructor( private http: HttpClient) { 
    this.http.get('assets/data/products.json').subscribe( (resp: ProductsInterface) =>{
      this.productos = resp;
    });
  }
}
