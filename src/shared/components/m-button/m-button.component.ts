import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'm-button',
  templateUrl: './m-button.component.html',
  styleUrls: ['./m-button.component.scss']
})
export class MButtonComponent implements OnInit {
  @Input()
  text: string;

  constructor() {}

  ngOnInit() {}
}
