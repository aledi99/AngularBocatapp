import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../models/login.dto';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  user : LoginDto;
  constructor(private servicio : AuthService) {
    this.user = new LoginDto('','');
   }

  ngOnInit() {
  }

  doLogin(){
    this.loading = true;
    this.servicio.login(this.user).subscribe(x => {
      this.loading = true;
      localStorage.setItem('miToken', x.access_token);
      localStorage.setItem('refreshToken', x.refresh_token);
      //alert('API TOKEN ' + x.access_token);
      window.location.href = '/uploadfile';
    },
    error =>{
      alert('Credenciales incorrectas');
      this.loading = false;
    }
    );
  }

}

