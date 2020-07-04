import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';
import { CartInterface } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  productos: Array<ProductsInterface> = new Array<ProductsInterface>();
  futbol: Array<ProductsInterface> = new Array<ProductsInterface>();
  futbolSala: Array<ProductsInterface> = new Array<ProductsInterface>();
  baloncesto: Array<ProductsInterface> = new Array<ProductsInterface>();
  tennis: Array<ProductsInterface> = new Array<ProductsInterface>();
  voleybol: Array<ProductsInterface> = new Array<ProductsInterface>();
  results: Array<ProductsInterface> = new Array<ProductsInterface>();
  carrito: Array<CartInterface> = new Array<CartInterface>();
  cartCount: number;

  constructor( private http: HttpClient) {
    this.LoadBalls().then(() => {
      this.FilterBalls();
    });
  }

  private LoadBalls(){
    return new Promise ((resolve, reject) => {
      this.http.get('assets/data/products.json').subscribe( (resp: Array<ProductsInterface>) => {
        this.productos = resp;
        resolve();
      });
   });
  }

  public FilterBalls(){
    this.futbol = this.productos.filter(product => product.category === 'Futbol');
    this.futbolSala = this.productos.filter(product => product.category === 'Futbol-sala');
    this.baloncesto = this.productos.filter(product => product.category === 'Baloncesto');
    this.tennis = this.productos.filter(product => product.category === 'Tenis');
    this.voleybol = this.productos.filter(product => product.category === 'Voleiball');
  }

  public SearchBalls(query: string){
    this.results = this.productos.filter(product => product.category === query);
    console.log(this.results);
  }
}

