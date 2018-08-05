import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  current: any;

  constructor() { }

  ngOnInit() {
    this.current = {
      date: new Date()
    };

  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();
    // return n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '';
    let index: number;
    const suffixes = ['th', 'st', 'nd', 'rd'];
    let returnValue: string;
    if ( n > 0 ) {
      if (n > 3) {
        index = 0;
      } else {
        index = n % 10;
      }
      returnValue = suffixes[index];
    } else {
      returnValue = '';
    }
    return returnValue;
  }

}
