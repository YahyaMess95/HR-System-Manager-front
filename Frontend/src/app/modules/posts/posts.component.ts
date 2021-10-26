import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Form, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Demande} from '../../models/demande';
import {CompTechDemande} from '../../models/CompTechDemande';
import {CompSocialeDemande} from '../../models/CompSocialeDemande';
import {FormationDemande} from '../../models/FormationDemande';
import {CertifDemande} from '../../models/CertifDemande';
import {Router} from '@angular/router';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    besoinP: FormGroup ;
    demande: Demande[] ;

    technique: FormGroup ;
    Comptech: CompTechDemande[] ;

    social: FormGroup ;
    CompSocial: CompSocialeDemande[];

    formation: FormGroup ;
    Formation: FormationDemande[] ;

    Certification: CertifDemande[] ;
    certification: FormGroup;

    constructor(private http: HttpClient , private a: FormBuilder , private _snackBar: MatSnackBar  ,public router : Router) {

    this.besoinP = a.group({
      mission : ['', [Validators.required]] ,
      speciality : ['', [Validators.required]] ,
      anneeExp : ['', [Validators.required]]
    });

    this.technique = a.group({comptech1: ['', [Validators.required]], comptech2: ['', [Validators.required]], comptech3: ['', [Validators.required]], comptech4: ['', [Validators.required]]}) ;
    this.social = a.group({compsocial1: ['', [Validators.required]], compsocial2: ['', [Validators.required]], compsocial3: ['', [Validators.required]], compsocial4: ['', [Validators.required]]}) ;
    this.formation = a.group({formation1: ['', [Validators.required]], formation2: ['', [Validators.required]], formation3: ['', [Validators.required]], formation4: ['', [Validators.required]]}) ;
    this.certification = a.group({certification1: ['', [Validators.required]], certification2: ['', [Validators.required]], certification3: ['', [Validators.required]], certification4: ['', [Validators.required]]}) ;

  }





  ngOnInit() {
  }


  btn1() {

    if (this.besoinP.value.mission !== ''  && this.besoinP.value.speciality !== ''  && this.besoinP.value.anneeExp !== '' ) {
      this._snackBar.open('Ajouter avec succés', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });


      this.demande = this.besoinP.value ;

      this.http.post('http://localhost:4070/RO/addDemande' , this.demande , ).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      ) ;
      console.log(this.demande) ;

      setTimeout(() => {

        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'block';
      }, 1700);


    } else {this._snackBar.open('verifier les champs', '', {
      duration: 1500,
      panelClass: ['red-snackbar']
    });

    }

  }
  btn2() {
    if (this.technique.value.comptech1 === '' && this.technique.value.comptech2 === '' && this.technique.value.comptech3 === '' && this.technique.value.comptech4 === '') {



      this._snackBar.open('verifier les champs', '', {
        duration: 1500,
        panelClass: ['red-snackbar']
      });




    } else {

    this.Comptech = this.technique.value;

    this.http.post('http://localhost:4070/RO/addTechnique' , this.Comptech  ).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    ) ;
    this._snackBar.open('Ajouter avec succés', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });
    console.log(this.Comptech);


    setTimeout(() => {

        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'block';
      }, 1700);
  }}

  btn3() {

    if (this.social.value.compsocial1 === '' && this.social.value.compsocial2 === '' && this.social.value.compsocial3 === '' && this.social.value.compsocial4 === '') {



      this._snackBar.open('verifier les champs', '', {
        duration: 1500,
        panelClass: ['red-snackbar']
      });




    } else {

      this.CompSocial = this.social.value;

      this.http.post('http://localhost:4070/RO/addSocial' , this.CompSocial ).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      ) ;
      this._snackBar.open('Ajouter avec succés', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });
      console.log(this.CompSocial);

      setTimeout(() => {

        document.getElementById('3').style.display = 'none';
        document.getElementById('4').style.display = 'block';
      }, 1700);
    }

  }


  btn4() {

    if (this.formation.value.formation1 === '' && this.formation.value.formation2 === '' && this.formation.value.formation3 === '' && this.formation.value.formation4 === '') {


      this._snackBar.open('verifier les champs', '', {
        duration: 1500,
        panelClass: ['red-snackbar']
      });


    } else {

      this.Formation = this.formation.value;

      this.http.post('http://localhost:4070/RO/addFormation', this.Formation).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this._snackBar.open('Ajouter avec succés', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });
      console.log(this.Formation);


      setTimeout(() => {

        document.getElementById('4').style.display = 'none';
        document.getElementById('5').style.display = 'block';
      }, 1700);
    }

  }




  btn5() {

    if (this.certification.value.certification1 === '' && this.certification.value.certification2 === '' && this.certification.value.certification3 === '' && this.certification.value.certification4 === '') {


      this._snackBar.open('verifier les champs', '', {
        duration: 1500,
        panelClass: ['red-snackbar']
      });


    } else {

      this.Certification = this.certification.value;

      this.http.post('http://localhost:4070/RO/addCertification', this.Certification).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      this._snackBar.open('Ajouter avec succés', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });
      setTimeout(() => {
        console.log(this.certification);


      }, 1700);


    }

  }
}
