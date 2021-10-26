import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {

  Offre : any;
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {

    this.httpClient.get('http://localhost:4070/Offre/AllOffre').subscribe(result => this.Offre = result,ex =>console.log(ex) );

  }




}
