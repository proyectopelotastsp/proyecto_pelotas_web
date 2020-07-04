import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-voleybol',
  templateUrl: './voleybol.component.html',
  styleUrls: ['./voleybol.component.css']
})
export class VoleybolComponent implements OnInit {

  constructor( public items: ItemsService ) { }

  ngOnInit(): void {
  }

}
