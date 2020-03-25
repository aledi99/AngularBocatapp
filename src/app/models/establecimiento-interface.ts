import { Time } from '@angular/common';

export interface Establecimiento{
    id: number;
    nombre: string;
    descripcion: string;
    presupuesto: number;
    abierto: Boolean;
    valoracion: number;
    horaapertura: Time;
    horaCierre: Time;
    favorito: Boolean;
    listProducto: any[];
    //localizacion: Ubicacion;
    listPagos: any[];
    listPedidos: any[];
    //categoria: Categoria;
    //imagen: Imagen;

}