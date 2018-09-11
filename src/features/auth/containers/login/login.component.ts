import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../../../../app/core/reducers';
// import { Login } from '../auth.actions';
// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['a@b.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  ngOnInit() {}

  // login() {
  //   const val = this.form.value;

  //   this.auth
  //     .login(val.email, val.password)
  //     .pipe(
  //       tap(user => {
  //         this.store.dispatch(new Login({ user }));

  //         this.router.navigateByUrl('/courses');
  //       })
  //     )
  //     .subscribe(noop, () => alert('Login Failed'));
  // }
}
