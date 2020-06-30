import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';
import { CartInterface } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  productos : Array<ProductsInterface> = new Array<ProductsInterface>();
  carrito : Array<CartInterface> = new Array<CartInterface>();
  cartCount: number;

  constructor( private http: HttpClient) { 
    this.http.get('assets/data/products.json').subscribe( (resp: Array<ProductsInterface>) =>{
      this.productos = resp;
    });
  }
}

