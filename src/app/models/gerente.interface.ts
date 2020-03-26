import { Usuario } from './usuario.interface';

export class Gerente extends Usuario{

    idGerente : number;
    validado: boolean;
    tlfContacto: string;

}