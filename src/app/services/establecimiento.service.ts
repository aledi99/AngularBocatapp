import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoEstablecimientoDto } from '../dto/newEstablecimientoDto.dto';
import { Establecimiento } from '../models/establecimiento-interface';

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

export class EstablecimientoService {

    constructor(private http: HttpClient) {
    }

    public getListaEstablecimientos(): Observable<Establecimiento[]> {
        return this.http.get<Establecimiento[]>(
          apiURL,
          requestOptions
        );
    }

    public crearEstablecimientos(nuevoEstablecimientoDto: NuevoEstablecimientoDto): Observable<Establecimiento> {
        return this.http.post<Establecimiento>(
          apiURL,
          nuevoEstablecimientoDto,
          requestOptions
        );
    }

    public deleteEstablecimiento(idEstablecimiento:number): Observable<Establecimiento> {
        return this.http.delete<Establecimiento>(
          apiURL + idEstablecimiento,
          requestOptions
        )
    }

}
