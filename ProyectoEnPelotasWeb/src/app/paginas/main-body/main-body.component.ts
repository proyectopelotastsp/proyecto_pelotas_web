import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor( public items: ItemsService) {
   }

  ngOnInit(): void {
  }

}
