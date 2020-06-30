import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 

  constructor( public items: ItemsService) { 
    // console.log(this.items.productos);
   }

  ngOnInit(): void {
  }

 

}
