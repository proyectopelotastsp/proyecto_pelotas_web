import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-futbol-sala',
  templateUrl: './futbol-sala.component.html',
  styleUrls: ['./futbol-sala.component.css']
})
export class FutbolSalaComponent implements OnInit {

  constructor( public items: ItemsService ) { }

  ngOnInit(): void {
  }

}
