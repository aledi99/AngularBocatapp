import { Time } from '@angular/common';

export class NuevoEstablecimientoDto{
    constructor( public nombre: string, public descripcion: string, public presupuesto: number, public horaApertura: Time, public horaCierre: Time ) {
    }
}