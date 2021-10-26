import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detailcandidature',
  templateUrl: './detailcandidature.component.html',
  styleUrls: ['./detailcandidature.component.css']
})
export class DetailcandidatureComponent implements OnInit {

  constructor(private  httpclient : HttpClient , private route : ActivatedRoute) { }
  id : any ;
  proffesionel : any ;
  technique : any ;
  personel : any ;
  social : any ;
  formation : any ;
  certification ;


  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.httpclient.get('http://localhost:4070/Postulation/findProffesionel/'+this.id).subscribe(res=>this.proffesionel= res , ex=>console.log(ex)) ;

    this.httpclient.get('http://localhost:4070/Postulation/findCompetence/'+this.id+'/technique')   .subscribe(res=>this.technique= res , ex=>console.log(ex)) ;

    this.httpclient.get('http://localhost:4070/Postulation/findPersoById/'+this.id).subscribe(res=>this.personel= res , ex=>console.log(ex)) ;

    this.httpclient.get('http://localhost:4070/Postulation/findCompetence/'+this.id+'/formation').subscribe(res=>this.formation= res , ex=>console.log(ex)) ;

    this.httpclient.get('http://localhost:4070/Postulation/findCompetence/'+this.id+'/social').subscribe(res=>this.social= res , ex=>console.log(ex)) ;

    this.httpclient.get('http://localhost:4070/Postulation/findCompetence/'+this.id+'/certification').subscribe(res=>this.certification= res , ex=>console.log(ex)) ;



  }

  entretien1(email) {

    this.httpclient.get('http://localhost:4070/Postulation/email/'+email+'/'+this.id).subscribe(res=>console.log(res) , ex=>console.log(ex)) ;

  }
}
