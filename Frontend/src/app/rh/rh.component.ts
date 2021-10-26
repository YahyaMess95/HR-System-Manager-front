import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RHComponent implements OnInit {

  constructor(http : HttpClient) { }
  sideBarOpen = true ;
  ngOnInit() {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
