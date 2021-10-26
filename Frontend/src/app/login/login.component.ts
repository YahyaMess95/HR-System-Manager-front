import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login: any;
  Mdp: any;

  constructor(private _snackBar: MatSnackBar , private router: Router ) { }

  btn(){

    if ( this.Login === 'RO' && this.Mdp === 'RO') {


      this.router.navigate(['/RO/posts']);
      this._snackBar.open('Bienvenue RO', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });

    }

    // ************************************************************************************//

    if ( this.Login === 'Admin' && this.Mdp === 'Admin') {


      this.router.navigate(['/admin/consulteA']);
      this._snackBar.open('Bienvenue Admin', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });

    }

    // ************************************************************************************//

    if ( this.Login === 'RH' && this.Mdp === 'RH') {


      this.router.navigate(['/RH/ListD']);
      this._snackBar.open('Bienvenue RH', '', {
        duration: 1500,
        panelClass: ['blue-snackbar']
      });

    }






  }
  ngOnInit() {
  }

}
