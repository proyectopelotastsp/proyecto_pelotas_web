import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  integrantes: Array<string> = [
    'CLAUDIA ESPERANZA CELIS PALACIO',
    'WILMER LOPEZ PEÑA',
    'CARLOS ANDRES FRANCO RESTREPO',
    'DIANA CAROLINA PARRA MEJIA',
    'EIDER GIOVANNI VELEZ BENAVIDES',
    'JOHN EDISON ZAMORA GAMBA'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
