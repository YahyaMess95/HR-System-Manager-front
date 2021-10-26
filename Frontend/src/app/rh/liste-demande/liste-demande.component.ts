import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-demande',
  templateUrl: './liste-demande.component.html',
  styleUrls: ['./liste-demande.component.css'],

})
export class ListeDemandeComponent implements OnInit {

  cars: any[];

  cols: any[];

  constructor( private httpClient : HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any[]>('http://localhost:4070/RO/findAccepted').subscribe(data => this.cars =  data  , ex => console.table(ex)) ;


  }
}
