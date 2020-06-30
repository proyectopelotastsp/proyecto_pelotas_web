import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  signUp: boolean = false;
  login: boolean = false;

  constructor( public items: ItemsService) { 
    // console.log(this.items.productos);
   }

  ngOnInit(): void {
  }

  SignUp(){
    this.signUp = !this.signUp;
  }

  Login(){
    this.login = !this.login;
  }

 

}
