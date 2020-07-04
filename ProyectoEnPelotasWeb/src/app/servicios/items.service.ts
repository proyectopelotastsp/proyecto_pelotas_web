import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsInterface } from '../interfaces/products.interface';
import { CartInterface } from '../interfaces/cart.interface';
import { Router } from '@angular/router';

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
  seleccionado: Array<ProductsInterface> = new Array<ProductsInterface>();
  userActive: boolean = false;
  cartCount: number;
  cartTotal: number = 0;
  query: string;

  constructor( private http: HttpClient , private router: Router) {
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
    if (query.length <= 1){
      alert('no es una busqueda valida, intenta nuevamente.');
    }else{
      this.LoadBalls().then(() => {
        this.router.navigate(['/resultados', query]);
        this.results = this.productos.filter(product => product.category === query);
        console.log(this.results);
        this.query = query;
        console.log(query);
      });
    }
  }

  public GoDetails(ref: string){
      this.LoadBalls().then(() => {
        var productoSeleccionado = this.productos.find(producto => {
          return producto.sku === ref;
        });
        // this.results = this.productos.filter(product => product.category === query);
        // console.log(this.results);
        // this.query = ref;
        this.seleccionado.push(productoSeleccionado);
        this.router.navigate(['/producto', ref]);
        console.log(ref);
        console.log(this.seleccionado);
      });
  }

  ChangeQuantity(array: number, operation: string, index: number , quantity: number){
    switch (array){
      case 0: {
        // TODOS
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.productos[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.productos[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.productos[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.productos[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 1: {
        // Futbol
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.futbol[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.futbol[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.futbol[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.futbol[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 2: {
        // Futsal
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.futbolSala[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.futbolSala[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.futbolSala[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.futbolSala[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 3: {
        // Baloncesto
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.baloncesto[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.baloncesto[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.baloncesto[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.baloncesto[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 4: {
        // Tenis
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.tennis[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.tennis[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.tennis[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.tennis[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 5: {
        // Voleibol
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.voleybol[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.voleybol[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.voleybol[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.voleybol[index].quantity++;
            }
            break;
          }
        }
        break;
      }

      case 6: {
        // Buscados
        switch (operation){
          case '-': {
            if (quantity === 1){
              this.results[index].quantity = 1;
              alert('este es el minimo de produtos posibles');
            }else{
              this.results[index].quantity--;
            }
            break;
          }
          case '+': {
            if (quantity === 5){
              this.results[index].quantity = 5;
              alert('maximo 5 unidades por producto');
            }else{
              this.results[index].quantity++;
            }
            break;
          }
        }
        break;
      }
    }
  }

  AddToCart(getTitle: string, getImage: string, getPrice: number, getQuantity: number , getSku: string){
    if (this.userActive === false){
      alert("Inicia sesión antes de comprar");
    }else{
      let totalPrice: number;
      totalPrice  = getPrice * getQuantity;
      this.carrito.push(
        {
          sku: getSku,
          title: getTitle,
          image: getImage,
          price: totalPrice,
          quantity: getQuantity
        }
      );
      this.cartCount = this.carrito.length;
      this.cartTotal += totalPrice;
    }
  }
}

