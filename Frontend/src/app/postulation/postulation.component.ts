import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Personnel} from "../models/Postulation/Personnel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Proffessionel} from "../models/Postulation/Proffessionel";
import {Competence} from "../models/Postulation/Competence";
import {UploadFileService} from "../upload/upload-file.service";

export interface Lieu {
  Latitude: string;
  Longitude: string;
  gouvernorat: string;
}


@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };


  technique: any;
  social: any;
  certification: any;
  formation: any;
  text: any;


  id: any;
  personel = new Personnel();
  prof = new Proffessionel();
  comp = new Competence();
  PersonelF: FormGroup;
  LienF: FormGroup;

  cv: any ;
  selfie : any;
  recto : any ;
  verso : any;


  Lieux: Lieu[] = [{Latitude: '36.86250', Longitude: '10.19556', gouvernorat: 'Ariana'}, {
    Latitude: '36.73333',
    Longitude: '9.18333',
    gouvernorat: 'Beja'
  }, {Latitude: '36.75333', Longitude: '10.2222', gouvernorat: 'Ben Arous'}, {
    Latitude: '37.29',
    Longitude: '9.87',
    gouvernorat: 'Bizerte'
  }, {Latitude: '33.88333', Longitude: '10.11667', gouvernorat: 'Gabes'}, {
    Latitude: '34.42500',
    Longitude: '8.78417',
    gouvernorat: 'Gafsa'
  }, {Latitude: '36.50111', Longitude: '8.77944', gouvernorat: 'Jendouba'}, {
    Latitude: '35.68',
    Longitude: '10.10',
    gouvernorat: 'Kairouan'
  }, {Latitude: '35.18', Longitude: '8.83', gouvernorat: 'Kasserine'}, {
    Latitude: '33.70194',
    Longitude: '8.97361',
    gouvernorat: 'Kebili'
  }, {Latitude: '36.19', Longitude: '8.71', gouvernorat: 'Le kef'}, {
    Latitude: '35.52',
    Longitude: '11.07',
    gouvernorat: 'Mahdia'
  }, {Latitude: '36.80778', Longitude: '10.10111', gouvernorat: 'Manouba'}, {
    Latitude: '33.35',
    Longitude: '10.49',
    gouvernorat: 'Medenine'
  }, {Latitude: '35.79', Longitude: '10.82', gouvernorat: 'Monastir'}, {
    Latitude: '36.45000',
    Longitude: '10.73333',
    gouvernorat: 'Nabeul'
  }, {Latitude: '34.74056', Longitude: '10.76028', gouvernorat: 'Sfax'}, {
    Latitude: '35.04028',
    Longitude: '9.49361',
    gouvernorat: 'Sidi Bouzid'
  }, {Latitude: '36.08333', Longitude: '9.36667', gouvernorat: 'Siliana'}, {
    Latitude: '35.82556',
    Longitude: '10.64111',
    gouvernorat: 'Sousse'
  }, {Latitude: '32.93333', Longitude: '10.45000', gouvernorat: 'Tatouine'}, {
    Latitude: '33.93',
    Longitude: '8.13',
    gouvernorat: 'Tozeur'
  }, {Latitude: '36.80278', Longitude: '10.17972', gouvernorat: 'Tunis'}, {
    Latitude: '36.40',
    Longitude: '10.14',
    gouvernorat: 'Zaghouan'
  }];


  constructor(private route: ActivatedRoute, private httpclient: HttpClient, private a: FormBuilder , private uploadService: UploadFileService ,private router : Router) {

    this.PersonelF = a.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],


    });

    this.LienF = a.group({
      linkedin: ['', [Validators.required]],
      facebook: ['', [Validators.required]],
      twitter: ['', [Validators.required]],
      tanitjob: ['', [Validators.required]],
      keejob: ['', [Validators.required]],
      indeed: ['', [Validators.required]],

    });


  }


  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('id');


  }


  addPostulation() {

    //personel
    let Localisation = (<HTMLInputElement>document.getElementById('localisation')).value;
    let sx = (<HTMLInputElement>document.getElementById('sx')).value;
    let sf = (<HTMLInputElement>document.getElementById('sf')).value;
    let dev = (<HTMLInputElement>document.getElementById('dev')).value;
    this.personel.sexe1 = sx;
    this.personel.localisation1 = Localisation;
    this.personel.situationFamiliale1 = sf;
    this.personel.prenom1 = this.PersonelF.value.prenom;
    this.personel.email1 = this.PersonelF.value.email;
    this.personel.numTel1 = this.PersonelF.value.telephone;
    this.personel.nom1 = this.PersonelF.value.nom;
    this.personel.dateNaissance1 = this.PersonelF.value.dateNaissance;
    this.personel.motivation1 = this.text;
    this.personel.dev1 = dev;
    this.httpclient.post('http://localhost:4070/Postulation/AddPerso/' + this.id, this.personel).subscribe(res => console.log(res), ex => console.log(ex));

    // proffesionel

    this.prof.facebook1 = this.LienF.value.facebook;
    this.prof.twitter1 = this.LienF.value.twitter;
    this.prof.tanitjob1 = this.LienF.value.tanitjob;
    this.prof.keejob1 = this.LienF.value.keejob;
    this.prof.linkedin1 = this.LienF.value.linkedin;
    this.prof.indeed1 = this.LienF.value.indeed;


    // competence

    setTimeout(() => {

      this.httpclient.post('http://localhost:4070/Postulation/AddProf/', this.prof).subscribe(res => console.log(res), ex => console.log(ex));

    }, 500);


    setTimeout(() => {

      // competence technique

      if (this.technique !== 0) {


        for (let i = 0; i < this.technique.length; i++) {

          this.comp.competence1 = this.technique[i];

          this.httpclient.post('http://localhost:4070/Postulation/competence/technique', this.comp).subscribe(data => console.log(data), ex => console.table(ex))
        }

      }
      else {
        console.log('vide technique');
      }


    }, 600);


    setTimeout(() => {

      // competence social

      if (this.social !== 0) {


        for (let i = 0; i < this.social.length; i++) {

          this.comp.competence1 = this.social[i];

          this.httpclient.post('http://localhost:4070/Postulation/competence/social', this.comp).subscribe(data => console.log(data), ex => console.table(ex))
        }

      }
      else {
        console.log('vide technique');
      }


    }, 600);


    setTimeout(() => {
      // competence certification

      if (this.certification !== 0) {


        for (let i = 0; i < this.certification.length; i++) {

          this.comp.competence1 = this.certification[i];

          this.httpclient.post('http://localhost:4070/Postulation/competence/certification', this.comp).subscribe(data => console.log(data), ex => console.table(ex))
        }

      }
      else {
        console.log('vide technique');
      }


    }, 800);


    setTimeout(() => {
      // competence formation

      if (this.formation !== 0) {


        for (let i = 0; i < this.formation.length; i++) {

          this.comp.competence1 = this.formation[i];

          this.httpclient.post('http://localhost:4070/Postulation/competence/formation', this.comp).subscribe(data => console.log(data), ex => console.table(ex))
        }

      }
      else {
        console.log('vide technique');
      }


    }, 1000);


    setTimeout(() => {

      this.httpclient.post('http://localhost:4070/Postulation/competence/formation', this.comp).subscribe(data => console.log(data), ex => console.table(ex))
      this.uploadcv();
      this.uploadphoto();
      this.uploadrecto();
      this.uploadverso();

      this.router.navigate(['../Cond']);
    }, 1500);




  }



  //*************************************************************************************//

  selectedFilescv: FileList;
  selectedFilesphoto: FileList;
  selectedFilesrecto: FileList;
  selectedFilesverso: FileList;
  progress = 0;
  message = '';
  currentFilecv: File;
  currentFilephoto: File;
  currentFilerecto: File;
  currentFileverso: File;
  selectFilecv(event) {
    this.selectedFilescv = event.target.files;
  }


  selectFilephoto(event) {
    this.selectedFilesphoto = event.target.files;
  }


  selectFilerecto(event) {
    this.selectedFilesrecto = event.target.files;
  }



  selectFileverso(event) {
    this.selectedFilesverso = event.target.files;
  }


  uploadcv() {


    this.currentFilecv = this.selectedFilescv.item(0);
    this.uploadService.uploadcv(this.currentFilecv).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFilecv = undefined;
      });

    this.selectedFilescv = undefined;
  }






  uploadrecto() {


    this.currentFilerecto = this.selectedFilesrecto.item(0);
    this.uploadService.uploadrecto(this.currentFilerecto).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFilerecto = undefined;
      });

    this.selectedFilesrecto = undefined;
  }


  uploadverso() {


    this.currentFilerecto = this.selectedFilesverso.item(0);
    this.uploadService.uploadverso(this.currentFilerecto).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFileverso = undefined;
      });

    this.selectedFilesverso = undefined;
  }



  uploadphoto() {


    this.currentFilephoto = this.selectedFilesphoto.item(0);
    this.uploadService.uploadphoto(this.currentFilephoto).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFilephoto = undefined;
      });

    this.selectedFilesphoto = undefined;
  }


  display: boolean = false;




}

