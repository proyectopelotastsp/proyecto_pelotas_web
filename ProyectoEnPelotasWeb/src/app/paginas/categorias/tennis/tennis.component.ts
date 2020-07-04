import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css']
})
export class TennisComponent implements OnInit {

  constructor( public items: ItemsService ) { }

  ngOnInit(): void {
  }

}
