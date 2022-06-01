import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHomeActived: boolean = true;

  constructor() { 
  }

  ngOnInit(): void {
    location.pathname == '/home' ? this.isHomeActived = true : this.isHomeActived = false;
  }

}
