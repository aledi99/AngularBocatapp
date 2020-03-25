import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevaCategoriadto } from '../dto/newCategoriaDto.dto';
import { Categoria } from '../models/categoria-interface';

const apiURL = 'https://bocatapi.herokuapp.com/api/';

const requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('miToken')
    })
};

@Injectable({
    providedIn: 'root'
})

export class CategoriaService {

    constructor(private http: HttpClient) {
    }

    public getlistaCategorias(): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(
          apiURL,
          requestOptions
        );
    }

    public crearCategoria(nuevaCategoriaDto: NuevaCategoriadto): Observable<Categoria> {
        return this.http.post<Categoria>(
          apiURL,
          nuevaCategoriaDto,
          requestOptions
        );
    }

    public deleteCategoria(idCategoria:number): Observable<Categoria> {
        return this.http.delete<Categoria>(
          apiURL + idCategoria,
          requestOptions
        )
    }

}