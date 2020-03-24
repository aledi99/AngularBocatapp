import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    public crearCategoria(nuevaCategoriaDto: NuevaCategoriaDto): Observable<Categoria> {
        return this.http.post<Categoria>(
          apiURL,
          nuevoEstablecimientoDto,
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