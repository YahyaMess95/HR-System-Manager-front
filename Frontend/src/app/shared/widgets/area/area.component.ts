import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Demande} from '../../../models/demande';



@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  demande: any ;
  constructor( private httpClient: HttpClient) { }
  ngOnInit() {

    this.httpClient.get('http://localhost:4070/RO/findDemande').subscribe(data => this.demande =  data  , ex => console.table(ex)) ;

  }

  btn1(demande){

    this.httpClient.post('http://localhost:4070/RO/findtech' , demande ).subscribe(data => console.log(data)  , ex => console.table(ex)) ;

  }
}


