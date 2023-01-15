import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss'],
})
export class HeaderMainComponent implements OnInit {

  text: string;

  constructor() { 

    this.text = 'Hello World';
    
  }

  ngOnInit() {}

}
