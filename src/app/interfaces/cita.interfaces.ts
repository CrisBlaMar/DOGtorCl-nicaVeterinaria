import { Servicio } from './servicio.interfaces';
import { Mascota } from './mascota.interfaces';

export interface Cita{
    fecha: Date,
    servicios : Servicio [],
    mascota : Mascota
  
}