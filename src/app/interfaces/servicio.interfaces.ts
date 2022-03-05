import { Tarifa } from './tarifa.interfaces';

export interface Servicio{
    referencia: number,
    nombre: string,
    descripcion: string,
    tarifas : Tarifa []
}