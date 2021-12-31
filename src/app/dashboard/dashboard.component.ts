import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }
  active=0;
  onTabChanged(event:any){
    console.log(event)
  }

}
