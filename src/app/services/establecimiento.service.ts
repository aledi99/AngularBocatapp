import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EstablecimientoResponse } from '../models/establecimiento.interface';

const URL_BASE = 'http://localhost:9000/api';




@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor(private http: HttpClient, private router : Router) { }

  public añadirEstablecimiento(form: FormData) : Observable<EstablecimientoResponse>{

    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
    })
  };

    return this.http.post<EstablecimientoResponse>(
      URL_BASE + '/local/',
      form,
      requestOptions
    )
  }
}
