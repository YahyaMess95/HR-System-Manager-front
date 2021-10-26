import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Demande} from '../../models/demande';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-demande-detail',
  templateUrl: './demande-detail.component.html',
  styleUrls: ['./demande-detail.component.css']
})
export class DemandeDetailComponent implements OnInit {
  panelOpenState = false;
  public id: string;

  constructor(private httpClient: HttpClient , private route: ActivatedRoute) { }
  technique: any ;
  social : any ;
  certification : any ;
  formation : any ;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get('http://localhost:4070/RO/findtech/' + this.id  ).subscribe(data => this.technique =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findsocial/' + this.id  ).subscribe(data => this.social =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findcertif/' + this.id  ).subscribe(data => this.certification =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findFormation/' + this.id  ).subscribe(data => this.formation =  data  , ex => console.table(ex)) ;

  }

}
