import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  maxDate;

  constructor () { }

  ngOnInit() {
    this.signUpFormInit();
  }


  signUpFormInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18); //today 18y ago
  }

  onSubmit(form: NgForm) {
    console.log(JSON.stringify(form.value, undefined, 2));
  }

}
