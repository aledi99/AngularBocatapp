import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { LoginDto } from '../models/login.dto';
import { LoginResponse } from '../models/login-response.interface';
import { SignUpDto } from '../models/signup.dto';
import { SignUpResponse } from '../models/signup-response.interface';

const urlSignUp = 'https://bocatapi.herokuapp.com/gerente/register';
const urlLogin = 'https://bocatapi.herokuapp.com/oauth/token';
const url = 'https://bocatapi.herokuapp.com';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('miToken')
  })
}; 

const httpOptionsLogin = {
  headers: new HttpHeaders().append('Authorization',
    'Basic ' + btoa(`proyectinter:secret`)).append('Content-type','application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(loginDto : LoginDto): Observable<LoginResponse>{
    const params = new HttpParams()
        .set('username', loginDto.username)
        .set('password', loginDto.password)
        .set('grant_type', 'password');
        
    return this.http.post<LoginResponse>(
      urlLogin,
      params,
      httpOptionsLogin
    );
  }

  signup(signUpDto : SignUpDto): Observable<SignUpResponse>{
    return this.http.post<SignUpResponse>(
      urlSignUp,
      signUpDto,
      httpOptions
    );
  }

    clearToken() {
    localStorage.removeItem('miToken');
    localStorage.removeItem('refreshToken');
  }

  mostrarNombreUsuario() : string{
    return jwt_decode(localStorage.getItem('miToken'))['user_name'];
  }



}
