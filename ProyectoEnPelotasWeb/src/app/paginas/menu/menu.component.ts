import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/servicios/items.service';
import { UsersInterface } from '../../interfaces/users.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  signUp: boolean = false;
  login: boolean = false;
  carrito: boolean = false;
  usuario: Array<UsersInterface> = new Array<UsersInterface>();
  clientes: Array<UsersInterface> = new Array<UsersInterface>();

  constructor( public items: ItemsService) {
   }

  ngOnInit(): void {
    this.clientes.push({
      userName: 'cafranco4',
      name: 'Carlos',
      lastName: 'Franco',
      email: 'cafranco4',
      password: '1234',
    });
  }

  SignUp(){
    this.signUp = !this.signUp;
  }

  Login(){
    this.login = !this.login;
  }
  Carrito(){
    this.carrito = !this.carrito;
  }

  PushUser(inputUserName: string, inputName: string, inputLastName: string, inputEmail: string, inputPassword: string){
    this.usuario.push({
      userName: inputUserName,
      name: inputName,
      lastName: inputLastName,
      email: inputEmail,
      password: inputPassword,
    });
    this.SignUser();
  }

  SignUser(){
    localStorage.setItem("clientes", JSON.stringify(this.usuario));
  }

  ReadUser(userName: string , pass: string){
    this.clientes = JSON.parse(localStorage.getItem("clientes"));
    console.log(this.clientes);
    var usuarioActivo = this.clientes.find(cliente => {
      return cliente.userName === userName;
    });
    console.log(usuarioActivo);

    // if (pass !=== usuarioActivo.password){
    //   console.log("contraseña erronea");
    // }
  }
}
