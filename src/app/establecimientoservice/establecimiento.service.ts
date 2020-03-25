import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstablecimientoDto2 } from '../establecimientomodel/establecimientodto';

const URL_BASE = 'http://localhost:9000/api';
const URL_BASE2 = 'http://localhost:9000';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor(private http: HttpClient) { }

  public getEstablecimientos(): Observable<EstablecimientoDto2[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<EstablecimientoDto2[]>(
      URL_BASE + '/local/',
      requestOptions);
  }

  public getImage(filename : String) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get(
      URL_BASE2 + '/downloadFile/' +  filename
    )
  }
}
