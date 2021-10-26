import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Offre} from "../../models/Offre";

@Component({
  selector: 'app-creer-offre',
  templateUrl: './creer-offre.component.html',
  styleUrls: ['./creer-offre.component.css']
})
export class CreerOffreComponent implements OnInit {

  id: any;
  mission: any;
  anneExp: any;
  spciality: any;
  prix: any;
  technique: any;
  social: any;
  certification: any;
  formation: any;


  /////////////////////////////////

  text1: string;
  for: any = 0;
  soc: any = 0;
  techs: any = 0;
  certs: any = 0;
  o = new Offre();

  constructor(private route: ActivatedRoute, private httpClient: HttpClient , private router: Router ) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.mission = this.route.snapshot.paramMap.get('mission');
    this.anneExp = this.route.snapshot.paramMap.get('experience');
    this.spciality = this.route.snapshot.paramMap.get('speciality');
    this.prix = this.route.snapshot.paramMap.get('prix');

    this.httpClient.get('http://localhost:4070/RO/findtech/' + this.id).subscribe(data => this.technique = data, ex => console.table(ex));
    this.httpClient.get('http://localhost:4070/RO/findsocial/' + this.id).subscribe(data => this.social = data, ex => console.table(ex));
    this.httpClient.get('http://localhost:4070/RO/findcertif/' + this.id).subscribe(data => this.certification = data, ex => console.table(ex));
    this.httpClient.get('http://localhost:4070/RO/findFormation/' + this.id).subscribe(data => this.formation = data, ex => console.table(ex));

  }


  ajouterOffre() {

    this.o.prix1 = this.prix;
    this.o.mission1 = this.mission;
    this.o.anneeExp1 = this.anneExp;
    this.o.id1 = this.id;
    this.o.speciality1 = this.spciality;
    this.o.desciption1 = this.text1;

    this.httpClient.post('http://localhost:4070/Offre/ajouterOffre/' + this.id, this.o).subscribe(res => {res}, ex => {
      console.log(ex);
    });

    //technique


        if (this.techs!==0){
           for (let i = 0; i < this.techs.length; i++) {this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/'+this.id+'/'+this.techs[i] ).subscribe(data => console.log(data)    , ex => console.table(ex)) }

          if (this.technique[0].comptech1!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.technique[0].comptech2!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.technique[0].comptech3!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.technique[0].comptech4!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}



        }        if (this.techs===0) {

      if (this.technique[0].comptech1!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.technique[0].comptech2!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.technique[0].comptech3!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.technique[0].comptech4!==''){this.httpClient.get('http://localhost:4070/Offre/ajoutertechnique/' + this.id+'/'+this.technique[0].comptech4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}

    }

      //formation

    if (this.for!==0){
      for (let j = 0; j < this.for.length; j++) {this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+this.id+'/'+this.for[j] ).subscribe(data => console.log(data)    , ex => console.table(ex)) }
      if (this.formation[0].formation1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+this.id+'/'+this.formation[0].formation1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}

    }
    if (this.for===0){
      if (this.formation[0].formation1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+this.id+'/'+this.formation[0].formation1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.formation[0].formation4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterFormation/'+ this.id+'/'+this.formation[0].formation4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}

    }




    // social

        if (this.soc!==0){

          for (let f = 0; f < this.soc.length; f++) {this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+this.id+'/'+this.soc[f] ).subscribe(data => console.log(data)    , ex => console.table(ex)) }
          if (this.social[0].compsocial1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+this.id+'/'+this.social[0].compsocial1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.social[0].compsocial2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.social[0].compsocial3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
          if (this.social[0].compsocial4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}


        }
        if (this.soc===0){

      if (this.social[0].compsocial1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+this.id+'/'+this.social[0].compsocial1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.social[0].compsocial2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.social[0].compsocial3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.social[0].compsocial4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterSocial/'+ this.id+'/'+this.social[0].compsocial4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}


    }






        // certification

    if (this.certs !==0){

      for (let k = 0; k < this.certs.length; k++) {  this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+this.id+'/'+this.certs[k] ).subscribe(data => console.log(data)    , ex => console.table(ex)) }
      if (this.certification[0].certification1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+this.id+'/'+this.certification[0].certification1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}

    }

    if (this.certs ===0){
      if (this.certification[0].certification1!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+this.id+'/'+this.certification[0].certification1 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification2!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification2 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification3!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification3 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}
      if (this.certification[0].certification4!==''){this.httpClient.get('http://localhost:4070/Offre/ajouterCertification/'+ this.id+'/'+this.certification[0].certification4 ).subscribe(data => console.log(data)    , ex => console.table(ex)) ;}

    }






    this.router.navigate(['/RH/ListOffre']);

  }
}

