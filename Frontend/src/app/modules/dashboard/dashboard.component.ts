import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 4, 54, 30], label: 'Series B' },
  ];
  public lineChartLabels: Label[] = ['janvier', 'Fevrier', 'Mars', 'Avril', 'May', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'novembre', 'Decembre'];
  public lineChartOptions: { responsive: boolean } = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255, 122, 71,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
}
