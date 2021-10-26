import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Demande} from '../../models/demande';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  com: FormGroup ;
  bug: FormGroup ;
demande: Demande[] ;
  constructor(private httpClient: HttpClient , private route: ActivatedRoute , private a: FormBuilder , private router : Router) {

    this.com = a.group({
      commentaire : ['', [Validators.required]] ,

    });
    this.bug = a.group({
      budget : ['', [Validators.required]] ,

    });
  }

  panelOpenState = false;
  public id: string;
  technique: any ;
  social: any ;
  certification: any ;
  formation: any ;


  foods: Food[] = [
    {value: 'Accepted', viewValue: 'Accépter'},
    {value: 'Refused', viewValue: 'Réfuser'}
  ];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.httpClient.get('http://localhost:4070/RO/findtech/' + this.id  ).subscribe(data => this.technique =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findsocial/' + this.id  ).subscribe(data => this.social =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findcertif/' + this.id  ).subscribe(data => this.certification =  data  , ex => console.table(ex)) ;
    this.httpClient.get('http://localhost:4070/RO/findFormation/' + this.id  ).subscribe(data => this.formation =  data  , ex => console.table(ex)) ;

  }

  test(val) {
    if (val === 'Accepted') {
      document.getElementById('commentaire').style.display = 'none';
      document.getElementById('budget').style.display = 'block';

    }
    if (val === 'Refused') {
      document.getElementById('budget').style.display = 'none';
      document.getElementById('commentaire').style.display = 'block';

    }
  }



  accept() {

   this.httpClient.get('http://localhost:4070/RO/acceptedD/' + this.id + '/' + this.bug.value.budget).subscribe(
     (response) => console.log(response),
     (error) => console.log(error)
   )  ;
   console.log(this.id + this.bug.value.budget);
   this.router.navigate(['admin/ArchiveAD']);
  }

  refuser() {

    this.httpClient.get('http://localhost:4070/RO/refusedD/' + this.id + '/' + this.com.value.commentaire).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )  ;
    console.log(this.id + this.bug.value.budget);
    this.router.navigate(['admin/ArchiveAD']);

  }


}
