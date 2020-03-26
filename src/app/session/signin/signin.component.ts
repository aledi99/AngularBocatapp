import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from 'src/app/loginservice/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  private loadingSubject: BehaviorSubject<boolean>;
  loading$: Observable<boolean>;

  constructor(private loginService: LoginService, private router: Router) {
    this.loadingSubject = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingSubject.asObservable();
  }
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.loadingSubject.next(true);
    this.loginService.login(this.form.value.username, this.form.value.password)
      .then(
        resp => {
          window.sessionStorage.setItem('access_token', resp.access_token);
          this.loadingSubject.next(false);
          
          this.router.navigate(['/']);
         
          
        })
   
  }
}
