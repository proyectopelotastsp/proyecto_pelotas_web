import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {

  constructor( public items: ItemsService ) { }

  ngOnInit(): void {
  }

}
