import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../servicios/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  queryString: string;
  constructor( public items: ItemsService , private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe( params => {
      console.log(params['query']);
      this.queryString = params['query'];
      this.items.SearchBalls( params['query'] );
    });
  }

}
