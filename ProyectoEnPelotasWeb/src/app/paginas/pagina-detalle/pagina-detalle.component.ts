import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-pagina-detalle',
  templateUrl: './pagina-detalle.component.html',
  styleUrls: ['./pagina-detalle.component.css']
})
export class PaginaDetalleComponent implements OnInit {

  constructor( public items_detalle: ItemsService) { }

  ngOnInit(): void {
  }

}
