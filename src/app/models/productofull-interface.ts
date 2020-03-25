import { EstablecimientoDto } from '../productomodel/establecimiento';
import { ImagenDto } from '../productomodel/imagen';


export interface ProductoDto2 {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    activo: boolean;
    gluten: boolean;
    lactosa: boolean;
    establecimiento: EstablecimientoDto;
    imagen: ImagenDto;
}