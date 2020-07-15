import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public orderby = 'date';
  public data: Data[] = [];

  constructor() {  
    this.data.push({
      firstName: 'NIKET',
      lastName: 'JOSHI',
      date: new Date(2018, 1, 24),
      age: 1
    });
    this.data.push({
      firstName: 'ALOK',
      lastName: 'PATIL',
      date: new Date(2018, 5, 4),
      age: 2
    });
    this.data.push({
      firstName: 'SIDDU',
      lastName: 'NAGARALLI',
      date: new Date(2018, 11, 24),
      age: 3
    });
  }
}

export interface Data {
  firstName: string;
  lastName: string;
  date: Date;
  age: Number;
};