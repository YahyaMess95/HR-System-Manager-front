import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-consulte-d',
  templateUrl: './consulte-d.component.html',
  styleUrls: ['./consulte-d.component.css']
})
export class ConsulteDComponent implements OnInit {

  demande: any ;
  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:4070/RO/findDemandeValider').subscribe(data => this.demande =  data  , ex => console.table(ex)) ;

  }

}
