import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RHComponent} from "../rh.component";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'

import autoTable from 'jspdf-autotable'
import * as jspdf from "jspdf";
import html2canvas from "html2canvas";
@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})
export class CandidatureComponent implements OnInit {

  personel : any;
  competence : any ;
  proffessionel : any ;
  cols : any[] ;


  constructor(private  httpclient:HttpClient) { }


  ngOnInit() {

    this.httpclient.get('http://localhost:4070/Postulation/ListeCandidat').subscribe(data=>this.personel= data , err=>console.log(err)) ;
  }



  /*name of the excel-file which will be downloaded. */
  fileName= 'ExcelSheet.xlsx';

  exportexcel(): void
  {

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);



  }

  Screen()
  {
    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }


}
