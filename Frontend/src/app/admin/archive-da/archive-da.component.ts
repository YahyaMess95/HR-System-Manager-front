import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-archive-da',
  templateUrl: './archive-da.component.html',
  styleUrls: ['./archive-da.component.css']
})
export class ArchiveDAComponent implements OnInit {

  demande: any ;
  constructor( private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:4070/RO/findArchive').subscribe(data => this.demande =  data  , ex => console.table(ex)) ;

  }

}
