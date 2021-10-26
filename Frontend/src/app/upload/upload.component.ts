import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {UploadFileService} from "./upload-file.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFilescv: FileList;
  selectedFilesphoto: FileList;
  selectedFilesrecto: FileList;
  selectedFilesverso: FileList;

  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() { ;
  }

  selectFilecv(event) {
    this.selectedFilescv = event.target.files;
  }


  selectFilephoto(event) {
    this.selectedFilesphoto = event.target.files;
  }


  selectFilerecto(event) {
    this.selectedFilesphoto = event.target.files;
  }



  selectFileverso(event) {
    this.selectedFilesphoto = event.target.files;
  }


  uploadcv() {


    this.currentFile = this.selectedFilescv.item(0);
    this.uploadService.uploadcv(this.currentFile).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFilescv = undefined;
  }






  uploadrecto() {


    this.currentFile = this.selectedFilesrecto.item(0);
    this.uploadService.uploadcv(this.currentFile).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFilescv = undefined;
  }


  uploadverso() {


    this.currentFile = this.selectedFilesverso.item(0);
    this.uploadService.uploadcv(this.currentFile).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFilescv = undefined;
  }



  uploadphoto() {


    this.currentFile = this.selectedFilesverso.item(0);
    this.uploadService.uploadphoto(this.currentFile).subscribe(
      event => {

      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFilescv = undefined;
  }




}
