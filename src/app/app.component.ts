import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  title = 'adminDesign';
  sideBarOpen=true;
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
