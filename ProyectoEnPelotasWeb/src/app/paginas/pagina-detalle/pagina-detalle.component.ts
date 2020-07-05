import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-pagina-detalle',
  templateUrl: './pagina-detalle.component.html',
  styleUrls: ['./pagina-detalle.component.css']
})
export class PaginaDetalleComponent implements OnInit {
   cantidad: number; 
  constructor( public items: ItemsService) {
    this.cantidad = 1;
   }

  ngOnInit(): void {
    this.items.seleccionado = [];
  }

  ChangeQuantity(operation: number){
    switch (operation){
      case 0: {
        if (this.cantidad === 1){
          this.cantidad = 1;
          alert('este es el minimo de produtos posibles');
        }else{
          this.cantidad--;
        }
        break;
      }
      case 1: {
        if (this.cantidad === 5){
          this.cantidad = 5;
          alert('maximo 5 unidades por producto');
        }else{
          this.cantidad++;
        }
        break;
      }
    }
  }

}
