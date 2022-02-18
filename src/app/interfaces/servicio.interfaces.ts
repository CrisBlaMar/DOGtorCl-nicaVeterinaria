import { Tarifa } from './tarifa.interfaces';

export interface Servicio{
    nombre: string,
    descripcion: string,
    tarifa : Tarifa
}