import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../productomodel/producto';

const URL_BASE = 'http://localhost:9000/api';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getMyProductos(): Observable<ProductoResponse[]>{
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      })
    };

    return this.http.get<ProductoResponse[]>(
      URL_BASE + '/local/me/productos/',
      requestOptions);
  }
}
