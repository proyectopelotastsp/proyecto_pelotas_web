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

}
