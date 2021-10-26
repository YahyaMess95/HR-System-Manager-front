import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Offre} from "../../../models/Offre";

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.css']
})
export class DetailOffreComponent implements OnInit {

  formation : any ;
  certification : any ;
  technique : any ;
  social : any ;
  offre : Offre ;
  id : any ;

  constructor( private httpClient : HttpClient , private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get<Offre>("http://localhost:4070/Offre/OffreById/"+this.id).subscribe(res=>this.offre =res  , ex=>console.log(ex));
    this.httpClient.get<any>("http://localhost:4070/Offre/TechniqueById/"+this.id).subscribe(res=>this.technique =res  , ex=>console.log(ex));
    this.httpClient.get<any>("http://localhost:4070/Offre/SocialById/"+this.id).subscribe(res=>this.social =res  , ex=>console.log(ex));
    this.httpClient.get<any>("http://localhost:4070/Offre/FormationById/"+this.id).subscribe(res=>this.formation =res  , ex=>console.log(ex));
    this.httpClient.get<any>("http://localhost:4070/Offre/certificationById/"+this.id).subscribe(res=>this.certification =res  , ex=>console.log(ex));


  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

}
