import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-baloncesto',
  templateUrl: './baloncesto.component.html',
  styleUrls: ['./baloncesto.component.css']
})
export class BaloncestoComponent implements OnInit {

  constructor( public items: ItemsService ) { }

  ngOnInit(): void {
  }

  ChangeQuantity(operation: string, index: number , quantity: number){
    switch (operation){
      case '-': {
        if (quantity === 1){
          this.items.productos[index].quantity = 1;
          alert('este es el minimo de produtos posibles');
        }else{
          this.items.productos[index].quantity--;
        }
        break;
      }
      case '+': {
        if (quantity === 5){
          this.items.productos[index].quantity = 5;
          alert('maximo 5 unidades por producto');
        }else{
          this.items.productos[index].quantity++;
        }
        break;
      }
    }
  }

  AddToCart(getTitle: string, getImage: string, getPrice: number, getQuantity: number , getSku: string){
    let totalPrice: number;
    totalPrice  = getPrice * getQuantity;
    this.items.carrito.push(
      {
        sku: getSku,
        title: getTitle,
        image: getImage,
        price: totalPrice,
        quantity: getQuantity
      }
    );
    this.items.cartCount = this.items.carrito.length;
    console.log(this.items.carrito);
    console.log(this.items.carrito.length);
  }

}
