import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDisplay',
  standalone: true
})
export class StatusDisplayPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value) {
      return 'Sin Estado';
    }
    
    switch (value) {
      case 'APROBADO_TUTOR':
      case 'APROBADO_DIR':
        return 'Aprobado';
      case 'RECHAZADO_TUTOR':
      case 'RECHAZADO_DIR':
        return 'Rechazado';
      case 'PENDIENTE':
      case 'PENDIENTE_TUTOR':
        return 'Pendiente';
      default:
        return 'Desconocido';
    }
  }
}